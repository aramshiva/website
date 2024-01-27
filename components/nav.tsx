import Link from 'next/link'

export default function Nav() {

    const links = [
        { href: '/', label: 'home' },
        { href: '/blog', label: 'blog'},
        { href: 'https://github.com/aramshiva', label: 'github'},
        { href: 'https://read.cv/aramsh', label: 'cv'},
        { href: 'mailto:me@aram.sh', label: 'email'},
    ]

    return (
        <nav className="grow-0 text-black"> {/* Added text-white class */}
            <ul
                className="flex flex-wrap lg:flex-row gap-x-5 gap-y-1 lg:gap-x-2 px-10 lg:px-0 mt-3 text-3xl md:text-base font-medium justify-around mx-auto lg:w-8/12 xl:w-5/12"
            >
                {links.map(({ href, label }) => (
                    <li
                        key={`${href}${label}`}
                        className="list-none pointer-events-auto p-0 m-0"
                    >
                        <Link href={href} className="hover:text-grey">
                            {label.toLowerCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}