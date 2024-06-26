import { useEffect, useState } from "react";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import Wrapper from "../components/wrapper";
import { useSession, signIn } from "next-auth/react";
import Filter from "bad-words";
import { motion } from "framer-motion";

export default function Guestbook() {
   const [entries, setEntries] = useState([]);
   const [newEntry, setNewEntry] = useState({ content: "" });
   const { data: session } = useSession();

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

      const timestamp = new Date().toISOString().split("T")[0];
      const filter = new Filter();
      const isProfane = filter.isProfane(newEntry.content);

      if (isProfane) {
         toast("Please refrain from using inappropriate language.");
         return;
      }

      const response = await fetch("/api/guestbook/post", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: session.user.name,
            ...newEntry,
            timestamp,
            email: session.user.email,
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

   const handleSignIn = () => {
      signIn("github");
   };

   return (
      <Wrapper>
         <div className="flex p-5">
            <div>
               <h1 className="mb-4 block text-xl font-bold sm:text-3xl">
                  Guestbook
               </h1>
               <h2 className="mt-4 text-lg font-bold">Sign the Guestbook</h2>
               {session ? (
                  <form onSubmit={handleSubmit} className="mt-4 w-48">
                     <Textarea
                        placeholder="Your message"
                        value={newEntry.content}
                        onChange={(e) =>
                           setNewEntry({ ...newEntry, content: e.target.value })
                        }
                        required
                        className="mb-2"
                     />
                     <button
                        type="submit"
                        className="rounded-md bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-stone-700"
                     >
                        Submit
                     </button>
                  </form>
               ) : (
                  <div>
                     <p>Please sign in to leave a message.</p>
                     <Button
                        onClick={handleSignIn}
                        className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-white"
                     >
                        Sign in with GitHub
                     </Button>
                  </div>
               )}
               <ul className="pt-20">
                  {entries
                     .sort(
                        (a, b) =>
                           new Date(b.timestamp).getTime() -
                           new Date(a.timestamp).getTime(),
                     )
                     .map((entry, index) => (
                        <li key={index} className="mb-4">
                           <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                           >
                              <p>
                                 <strong>{entry.name}</strong> (
                                 {new Date(
                                    entry.timestamp,
                                 ).toLocaleDateString()}
                                 ):
                              </p>
                              <p>{entry.content}</p>
                           </motion.div>
                        </li>
                     ))}
               </ul>
            </div>
         </div>
      </Wrapper>
   );
}
