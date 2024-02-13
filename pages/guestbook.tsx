import { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export default function Guestbook() {
   const [entries, setEntries] = useState([]);
   const [newEntry, setNewEntry] = useState({ name: "", content: "" });

   // Fetch entries from the API
   async function fetchEntries() {
      const response = await fetch("/api/guestbook/retrieve");
      const data = await response.json();
      setEntries(data);
   }

   useEffect(() => {
      fetchEntries();
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const timestamp = new Date().toISOString();
      const response = await fetch("/api/guestbook/post", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ ...newEntry, timestamp }),
      });

      if (response.ok) {
         fetchEntries(); // Refresh entries to include the new submission
         setNewEntry({ name: "", content: "" }); // Reset form fields
         toast("Success"); // Display success message
      } else {
         toast("Error! " + response.statusText); // Display error message
      }
   };

   return (
      <div className="flex justify-center">
         <div className="max-w-md rounded-lg bg-gray-100 p-4 shadow-lg">
            <h1 className="mb-4 text-2xl font-bold">Guestbook</h1>
            <ul>
               {entries.map((entry, index) => (
                  <li key={index} className="mb-4">
                     <p>
                        <strong>{entry.name}</strong> (
                        {new Date(entry.timestamp).toLocaleString()}):
                     </p>
                     <p>{entry.content}</p>
                  </li>
               ))}
            </ul>
            <h2 className="mt-4 text-xl font-bold">Sign the Guestbook</h2>
            <form onSubmit={handleSubmit} className="mt-4">
               <Input
                  type="text"
                  placeholder="Your name"
                  value={newEntry.name}
                  onChange={(e) =>
                     setNewEntry({ ...newEntry, name: e.target.value })
                  }
                  required
                  className="mb-2"
               />
               <Textarea
                  placeholder="Your message"
                  value={newEntry.content}
                  onChange={(e) =>
                     setNewEntry({ ...newEntry, content: e.target.value })
                  }
                  required
                  className="mb-2"
               />
               <Button
                  type="submit"
                  className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
               >
                  Submit
               </Button>
            </form>
         </div>
      </div>
   );
}
