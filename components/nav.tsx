import Link from "next/link";

const navItems = {
    "/": {
        name: "home",
    },
    "/work": {
        name: "work",
    },
    "mailto:me@aram.sh": {
        name: "email",
    },
};

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 pt-9 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="fade relative flex scroll-pr-6 flex-row items-start md:relative md:overflow-auto"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="relative flex px-2 py-1 align-middle transition-all"
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
export default Navbar;
