import Image from "next/image";
import Container from "../../../components/container";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <p className="text-9xl font-bold">N₂</p>
            <div className="pb-20" />
            <Link href="/p/nitrogencycle/nh3">
              <Button className="bg-indigo-600 pb-8 pl-7 pr-7 pt-8 text-lg text-white">
                Nitrogen Fixation
              </Button>
            </Link>
            <div className="text-large pb-10" />
            <p>
              You are a <strong>N₂</strong> atom. This is where everyone starts.
            </p>
          </div>
          <div>
            <Image
              src="/projects/nitrogencycle/N2.png"
              alt="Nitrogen Cycle"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
