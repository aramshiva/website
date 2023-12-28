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
              <div className="pb-5" />
              <p className="font-bold text-9xl">NO₃</p>
              <div className="pb-20" />
              <Link href="/p/nitrogencycle/consume" className="pr-8">
                <Button className="pr-7 pb-8 pl-7 pt-8 text-lg bg-indigo-600 text-white">
                  Consumption
                </Button>
              </Link>
              <Link href="/p/nitrogencycle/">
                <Button className="pr-7 pb-8 pl-7 pt-8 text-lg bg-indigo-600 text-white">
                  Denitrification
                </Button>
              </Link>
              <div className="pb-10 text-large" />
              <p className="contain break-normal">
                You are a <strong>NO₃</strong> atom. You have been through{" "}
                <br />
                the process of nitrification and turned into nitrite <br />
                then nitrate
              </p>
            </div>
            <div className="pl-9">
              <Image
                src="/projects/nitrogencycle/NO3.png"
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
