import Image from "next/image";
import Container from "../../../components/container";
import Layout from "../../../components/layout";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <Container>
          <div className="flex flex-row justify-center align-middle">
            <div>
              <Image
                className="pt-10"
                src="/projects/nitrogencycle/nitrogencycle.svg"
                alt="logo"
                width={200}
                height={200}
              />
              <Link href="/p/nitrogencycle/nh4">
                <Button className="bg-indigo-600 pb-8 pl-7 pr-7 pt-8 text-lg text-white">
                  Decompose
                </Button>
              </Link>
              <div className="pb-10 text-large" />
              <p className="contain break-normal">
                You have been consumed! Press the next button to continue!
              </p>
            </div>
            <div className="pl-9">
              <Image
                src="/projects/nitrogencycle/CONSUME.png"
                alt="Nitrogen Cycle"
                width={500}
                height={500}
                className="pt-9"
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
