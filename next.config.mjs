import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
      domains: ['i.scdn.co'],
    },
}

const withMDX = createMDX({
})

export default withMDX(nextConfig)
