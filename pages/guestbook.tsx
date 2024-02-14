import { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import Wrapper from "../components/page";

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

      const timestamp = new Date().toISOString().split("T")[0]; // Get only the date
      const response = await fetch("/api/guestbook/post", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ ...newEntry, timestamp }),
      });

      if (!response.ok) {
         fetchEntries(); // Refresh entries to include the new submission
         setNewEntry({ name: "", content: "" }); // Reset form fields
         toast("Thanks for signing my guestbook!"); // Display success message
      } else {
         toast("Error! " + response.statusText); // Display error message
      }
   };

   return (
      <Wrapper>
         <div className="flex p-5">
            <div>
               <h1 className="mb-4 text-2xl font-bold">Guestbook</h1>
               <h2 className="mt-4 text-lg font-bold">Sign the Guestbook</h2>
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
                     className="rounded-md px-4 py-2 text-white"
                  >
                     Submit
                  </Button>
               </form>
               <ul className="pt-20">
                  {entries.map((entry, index) => (
                     <li key={index} className="mb-4">
                        <p>
                           <strong>{entry.name}</strong> (
                           {new Date(entry.timestamp).toLocaleDateString()}):
                        </p>
                        <p>{entry.content}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </Wrapper>
   );
}
