import Link from "next/link";

const navItems = [
   { path: "/", name: "home" },
   { path: "/work", name: "work" },
   { path: "/guestbook", name: "guestbook" },
   { path: "/photos", name: "photos" },
   // { path: "/blog", name: "blog" }, # Blog is in beta.
   { path: "mailto:me@aram.sh", name: "email" },
];

const Navbar = () => (
   <aside className="-ml-[8px] mb-16 pt-9 tracking-tight">
      <div className="lg:sticky lg:top-20">
         <nav className="fade relative flex scroll-pr-6 flex-row items-start md:relative md:overflow-auto">
            <div className="flex flex-row space-x-0 pr-10">
               {navItems.map(({ path, name }) => (
                  <Link
                     key={path}
                     href={path}
                     className="relative flex px-2 py-1 align-middle transition-all"
                  >
                     {name}
                  </Link>
               ))}
            </div>
         </nav>
      </div>
   </aside>
);

export default Navbar;
