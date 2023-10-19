import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Twemoji from "../components/twemojirenderer";
import Link from "next/link";
import Footer from "../components/footer";

export default function Index() {
  return (
    <>
        <div>
            <Layout>
                <Container>
                    <div className="font-mono link:font-black">
                        <div className="font-black pt-20 text-5xl">
                            <p>CREDITS</p>
                        </div>
                        <div>
                            <div className="italic">
                            "Good artists borrow, Great artists steal.”
                            </div>
                            <div>-Pablo Picasso</div>
                        </div>
                        <br />
                        <br />
                        <div className="font-mono">
                            <div>
                            <div>HELP</div>
                            <div>
                                <Link href="https://arashshiva.com" className="hover:uppercase hover:no-underline">Arash Shiva</Link>
                            </div>
                            </div>
                            <br />
                            <div>
                            <p>INSPIRATION</p>
                            </div>
                            <div>
                            <Link href="https://www.arashshiva.com/" className="hover:uppercase hover:no-underline">arashshiva.com</Link>
                            <br />
                            <Link href="https://eliasruiz.com/#about" className="hover:uppercase hover:no-underline">eliasruiz.com</Link>
                            <br />
                            <Link href="https://tr.af/" className="hover:uppercase hover:no-underline">tr.af</Link>
                            <br />
                            <Link href="https://chronark.com/" className="hover:uppercase hover:no-underline">chronark.com</Link>
                            <br />
                            <Link href="https://github.com/itsmingjie/monolith/tree/main" className="hover:uppercase hover:no-underline">
                                github/itsmingie/monolith
                            </Link>
                            <br />
                            </div>
                            <br />
                            <div>
                            <div className=" line-through">STOLEN CODE</div>
                            <div>
                                <Link href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter" className="hover:uppercase hover:no-underline">
                                vercel/next.js/canary/examples/blog-starters
                                </Link>
                            </div>
                            </div>
                            <br />
                            <div>
                            <div>TUTORIALS</div>
                            <div>
                                <Link href="https://dev.to/einargudnig/animated-waving-hand-emoji-4h54" className="hover:uppercase hover:no-underline">
                                Animated Waving Hand Emoji
                                </Link><br />
                                <Link href="https://github.com/tameemsafi/typewriterjs" className="hover:uppercase hover:no-underline">
                                    TypewriterJS
                                </Link>
                            </div>
                            </div>
                            <br />
                            
                    </div>
                    </div>
                </Container>
                <Footer />
            </Layout>
        </div>
    </>
  );
}