"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  date: string;
};

type User = {
  name: string;
} | null;

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    { id: 1, name: "Alice", message: "Great website!", date: "2023-06-15" },
    { id: 2, name: "Bob", message: "Love the content!", date: "2023-06-16" },
  ]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<User>(null);

  const handleSignIn = () => {
    // Simulating GitHub sign-in
    setUser({ name: "GitHub User" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && message) {
      const newEntry: GuestbookEntry = {
        id: entries.length + 1,
        name: user.name,
        message,
        date: new Date().toISOString().split("T")[0],
      };
      setEntries([newEntry, ...entries]);
      setMessage("");
    }
  };

  return (
    <div className="px-4 py-16 max-w-2xl">
      <h1 className="text-xl font-light mb-8 tracking-tight">Guestbook</h1>

      {!user ? (
        <Button
          onClick={handleSignIn}
          variant="outline"
          className="mb-8 bg-black text-white hover:bg-gray-800"
        >
          <GitHubLogoIcon className="mr-2 h-4 w-4" /> Sign in with GitHub
        </Button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          <p className="text-sm text-gray-500">Signed in as {user.name}</p>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
            className="w-full border-0 border-b border-gray-200 rounded-none px-0 py-2 focus:ring-0 focus:border-black resize-none"
          />
          <Button type="submit" className="w-full">
            Sign Guestbook
          </Button>
        </form>
      )}

      <div className="space-y-8">
        {entries.map((entry) => (
          <div key={entry.id} className="py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{entry.name}</p>
              <p className="text-xs text-gray-400">{entry.date}</p>
            </div>
            <p className="text-gray-700">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
