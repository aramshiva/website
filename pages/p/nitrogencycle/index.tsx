import Image from 'next/image'
import { Inter } from 'next/font/google'
import Container from '../../../components/container';
import Layout from '../../../components/layout';
import {Button} from "@nextui-org/react";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <Image className="pt-10" src="/projects/nitrogencycle/nitrogencycle.svg" alt='logo' width={200} height={200}/>
          <div className='pb-5'/>
          <p className='font-bold text-9xl'>N₂</p>
          <div className='pb-20'/>
          <Link href="/p/nitrogencycle/no3"><Button className="pr-7 pb-8 pl-7 pt-8 text-lg bg-indigo-600 text-white">
          Nitrogen Fixation
          </Button></Link>
          <div className='pb-10 text-large'/>
          <p>You are a <strong>N₂</strong> atom. This is where everyone starts.</p>
        </Container>
      </Layout>
    </>
  )
}