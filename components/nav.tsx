import Link from 'next/link';

const navItems = {
    '/': {
        name: 'home',
    },
    'mailto:me@aram.sh': {
        name: 'email',
    },
    '/blog': {
        name: 'blog',
    },
};

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight pt-9">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all flex align-middle relative py-1 px-2"
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
