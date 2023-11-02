import Layout from "../components/layout";
import Container from "../components/container";
import Link from "next/link";

export default function Index() {
  return (
    <>
        <div>
            <Layout>
                <Container>
                    <div className="font-sans link:font-black">
                        <div className="font-black pt-20 text-5xl">
                            <p>CREDITS</p>
                        </div>
                        <div>
                            <div className="italic">
                            "Good artists borrow, Great artists steal.”
                            </div>
                            <div>-Pablo Picasso 🎨</div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <div>
                            <div>HELP</div>
                            <div>
                                <Link href="https://arashshiva.com" className="hover:uppercase hover:no-underline hover:font-mono">Arash Shiva</Link><br />
                                <Link href="https://hackclub.com/slack" className="hover:uppercase hover:no-underline hover:font-mono">Fellow Hack Clubbers</Link>
                            </div>
                            </div>
                            <br />
                            <div>
                            <p>INSPIRATION</p>
                            </div>
                            <div>
                            <Link href="https://www.arashshiva.com/" className="hover:uppercase hover:no-underline hover:font-mono">arashshiva.com</Link>
                            <br />
                            <Link href="https://eliasruiz.com/#about" className="hover:uppercase hover:no-underline hover:font-mono">eliasruiz.com</Link>
                            <br />
                            <Link href="https://tr.af/" className="hover:uppercase hover:no-underline hover:font-mono">tr.af</Link>
                            <br />
                            <Link href="https://chronark.com/" className="hover:uppercase hover:no-underline hover:font-mono">chronark.com</Link>
                            <br />
                            <Link href="https://github.com/itsmingjie/monolith/tree/main" className="hover:uppercase hover:no-underline hover:font-mono">
                                github/itsmingie/monolith
                            </Link>
                            <br />
                            </div>
                            <br />
                            <div>
                            <div className=" line-through">STOLEN CODE</div>
                            <div>
                                <Link href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" className="hover:uppercase hover:no-underline hover:font-mono">
                                vercel/next.js/canary/examples/blog-starters
                                </Link>
                            </div>
                            </div>
                            <br />
                            
                    </div>
                    </div>
                </Container>
            </Layout>
        </div>
    </>
  );
}