"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { SiGithub, SiReaddotcv, SiInstagram, SiLinkedIn } from "react-icons/si";
// import Filter from "bad-words";
import { toast } from "sonner";

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
    // const filter = new Filter();
    // const isProfane = filter.isProfane(newEntry.content);

    // if (isProfane) {
    //   console.log("Please refrain from using inappropriate language.");
    //   return;
    // }

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
      toast.success("Thanks for signing my guestbook!");
    } else {
      toast.error("Error! " + response.statusText);
    }
  };

  const handleSignIn = () => {
    signIn("github", { callbackUrl: window.location.href });
  };
  return (
    <>
      <div className="font-satoshi text-[#374151] [&_a]:decoration-amber-500 [&_a]:hover:text-amber-800 [&_a]:underline [&_a]:font-medium">
        <div className="w-screen">
          <div className="sm:pb-[5rem] sm:px-[7.5rem] pb-[3rem] px-[2rem]">
            <div className="text-left text-wrap">
              <div className="pt-[5rem] pb-7 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Image
                      src="/shapes/1.svg"
                      alt="shape"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link href="/photos" className="!no-underline">
                    photos
                  </Link>
                  <Link href="/guestbook" className="!no-underline">
                    guestbook
                  </Link>
                </div>
                <nav className="flex gap-4 text-[#374151] text-xl">
                  <Link href="https://www.instagram.com/aramshva/">
                    <SiInstagram />
                  </Link>
                  <Link href="https://github.com/aramshiva">
                    <SiGithub />
                  </Link>
                                    <Link href="https://www.linkedin.com/in/armsh/">
                    <SiLinkedIn />
                  </Link>
                  <Link href="/resume.pdf">
                    <SiReaddotcv />
                  </Link>
                </nav>
              </div>
              <p className="pb-2">
                welcome! i would love if you left a message or said hi!
              </p>
              {session ? (
                <form onSubmit={handleSubmit} className="mt-4">
                  <Textarea
                    placeholder="Your message"
                    value={newEntry.content}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, content: e.target.value })
                    }
                    required
                    className="mb-2 bg-white border-stone-100"
                  />
                  <div className="pt-5" />
                  <Button
                    type="submit"
                    className="rounded-md px-4 py-2 shadow text-white bg-black hover:bg-stone-700"
                  >
                    Submit
                  </Button>
                </form>
              ) : (
                <Button
                  onClick={handleSignIn}
                  className="mt-4 rounded-md bg-black px-4 py-2 text-white hover:bg-stone-700"
                >
                  <SiGithub className="mr-2" />
                  Sign in with GitHub
                </Button>
              )}
              <ul className="pt-9">
                <p className="pb-5">
                  here{"'"}s some of the last visitors logs:
                </p>
                {entries
                  .sort(
                    (a, b) =>
                      new Date(b.timestamp).getTime() -
                      new Date(a.timestamp).getTime(),
                  )
                  .map((entry, index) => (
                    <li key={index} className="mb-4 list-none">
                      <p>
                        <span className="font-medium">{entry.name}</span> (
                        {new Date(entry.timestamp).toLocaleDateString()}):
                      </p>
                      <p>{entry.content}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
