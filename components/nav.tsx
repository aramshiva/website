import Link from 'next/link'
import { motion } from 'framer-motion'

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
            <motion.ul
                layout
                className="flex flex-wrap lg:flex-row gap-x-5 gap-y-1 lg:gap-x-2 px-10 lg:px-0 mt-3 text-sm md:text-base font-medium justify-around mx-auto lg:w-8/12 xl:w-5/12"
                initial="visible"
                animate="visible"
                transition={{ type: "easeInOut", delay: 0.8, staggerChildren: 0.2 }}
            >
                {links.map(({ href, label }) => (
                    <motion.li
                        key={`${href}${label}`}
                        className="list-none pointer-events-auto p-0 m-0"
                        variants={{
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                            rotate: [0, 10, -10, 0],
                            transition: { duration: 0.5 }
                        }}
                        >
                        <Link href={href} className="hover:text-grey">
                            {label.toLowerCase()}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    )
}