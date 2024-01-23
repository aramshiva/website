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
              <p className="text-9xl font-bold">NH₃</p>
              <div className="pb-20" />
              <Link href="/p/nitrogencycle/no3">
                <Button className="bg-indigo-600 pb-8 pl-7 pr-7 pt-8 text-lg text-white">
                  Nitrification
                </Button>
              </Link>
              <div className="pb-10 text-large" />
              <p>
                You are a <strong>NH₃</strong> atom. You have been through the
                process of nitrogen fixation
              </p>
            </div>
            <div>
              <Image
                src="/projects/nitrogencycle/NH3.png"
                alt="Nitrogen Cycle"
                width={500}
                height={500}
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
