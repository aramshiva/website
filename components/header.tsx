import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-6xl md:text-8xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 text-sky-200">
      <Link href="/" className="hover:underline">
        Aram
      </Link>
    </h2>
  )
}

export default Header
