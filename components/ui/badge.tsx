import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
   children?: React.ReactNode;
   color?: string;
   className?: string;
   link?: string; // Add the link prop
};

export default function Badge({
   children,
   color = "red",
   className,
   link,
}: Props) {
   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <Link href={link || ""}>
            <span
               className={`inline-flex items-center gap-2 rounded-xl px-5 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-200 ${className}`}
            >
               <svg
                  className={`h-1.5 w-1.5`}
                  viewBox="0 0 6 6"
                  aria-hidden="true"
               >
                  <circle cx={3} cy={3} r={3} fill={color} />
               </svg>
               {children}
            </span>
         </Link>
      </motion.div>
   );
}
