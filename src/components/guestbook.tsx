"use client";
import { useState, useEffect } from "react";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Filter } from "bad-words";
import { FaGithub } from "react-icons/fa";

interface Entry {
  name: string;
  content: string;
  timestamp: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState({ content: "" });
  const { data: session } = useSession();

  async function fetchEntries() {
    const response = await fetch("/api/guestbook/");
    const data = await response.json();
    setEntries(data);
  }

  useEffect(() => {
    fetchEntries();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const timestamp = new Date().toISOString().split("T")[0];
    const filter = new Filter();
    const isProfane = filter.isProfane(newEntry.content);

    if (isProfane) {
      toast("Please refrain from using inappropriate language.");
      return;
    }

    const response = await fetch("/api/guestbook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: session?.user?.name,
        ...newEntry,
        timestamp,
        email: session?.user?.email,
      }),
    });

    if (response.ok) {
      fetchEntries();
      setNewEntry({ content: "" });
      toast("Thanks for signing my guestbook!");
    } else {
      toast("Error! " + response.statusText);
    }
  };

  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: window.location.href });
  };

  return (
    <>
      {session ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <Textarea
            placeholder="Your message"
            value={newEntry.content}
            onChange={(e) =>
              setNewEntry({ ...newEntry, content: e.target.value })
            }
            required
            className="mb-2 bg-white border-slate-200"
          />
          <div className="pt-5" />
          <Button
            type="submit"
            className="rounded-md px-4 py-2 dark:border dark:border-slate-100 text-white dark:text-black bg-black dark:bg-white"
          >
            Submit
          </Button>
        </form>
      ) : (
        <div>
          <p>Please sign in to leave a message.</p>
          <Button
            onClick={handleSignIn}
            className="mt-4 rounded-md hover:bg-slate-200 bg-white dark:bg-white px-4 py-2 text-black dark:text-white"
          >
            <FaGithub className="inline" />
            Sign in with GitHub
          </Button>
        </div>
      )}
      <ul className="pt-20">
        {entries
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .map((entry, index) => (
            <li key={index} className="mb-4 list-none">
              <p>
                <strong className="text-white dark:text-black">
                  {entry.name}
                </strong>{" "}
                ({new Date(entry.timestamp).toLocaleDateString()}):
              </p>
              <p>{entry.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
