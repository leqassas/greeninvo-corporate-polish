import Head from "next/head";
import Hero from "@/components/Hero";
import Contactus from "@/components/contact/Contactus";
import Help from "@/components/contact/Help";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero page={"contact"} bg={"contact.webp"} heading={"Contact Us"} />

      <Contactus />
      <Help />
    </>
  );
}
