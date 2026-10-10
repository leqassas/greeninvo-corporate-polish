import Head from "next/head";
import Hero from "@/components/Hero";
import History from "@/components/Home/History";
import { chakra } from "@chakra-ui/react";
import Employees from "@/components/Home/Employees";
import Company from "@/components/Home/Company";
import PS from "@/components/Home/PS";
import Quote from "@/components/Home/Quote";
export default function Home() {
  return (
    <>
      <Head>
        <title>The Green Innovation</title>
        <meta
          name="description"
          content="Creating value from waste to drive a greener future."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero
        page={"home"}
        bg={"homebg1.webp"}
        heading={
          <>
            <chakra.span
              lineHeight={["noraml", "noraml", "6.25rem"]}
              whiteSpace={"pre"}
            >
              {"Creating value from waste\nto drive a greener future."}
            </chakra.span>
          </>
        }
      />
      <History />
      <Company />
      <Quote />
      <PS />
    </>
  );
}
