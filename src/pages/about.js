import Head from "next/head";
import Hero from "@/components/Hero";
import { chakra } from "@chakra-ui/react";
import AboutUs from "@/components/about/AboutUs";
import Employees from "@/components/Home/Employees";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"about"}
        bg={"about.webp"}
        heading={
          <>
            About <chakra.span>Us</chakra.span>
          </>
        }
        text={
          "The Green Innovation is a Netherlands-based company that specializes in sustainable solutions for waste management and energy production. Founded as holding company for Bioenergy For Alternative Fuels Egypt-based company. "
        }
      />
      <AboutUs />
      <Employees />
    </>
  );
}
