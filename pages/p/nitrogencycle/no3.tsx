import Image from 'next/image'
import Layout from '../../../components/layout';
import Container from '../../../components/container';
import {Button} from "@nextui-org/react";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <Image className="pt-10" src="/projects/nitrogencycle/nitrogencycle.svg" alt='logo' width={200} height={200}/>
          <div className='pb-5'/>
          <p className='font-bold text-9xl'>NO₃</p>
          <div className='pb-20'/>
          <Link href="/p/nitrogencycle/no3-"><Button className="pr-5 pb-5 pl-5 pt-5 text-2xl bg-indigo-600 text-white">
          Nitrification
          </Button></Link>
          <div className='pb-10 text-large'/>
          <p>You are a <strong>NO₃</strong> atom. You have been through the process of nitrogen fixation.</p>
        </Container>
      </Layout>
    </>
  )
}