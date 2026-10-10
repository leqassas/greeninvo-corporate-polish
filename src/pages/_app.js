import { ChakraProvider } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import Layout from "@/styles/Layout";
import styledTheme from "@/styles/theme";
import CustomCursor from "@/components/CustomCursor";
import { ExperienceProvider } from "@/components/motion/Experience";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={styledTheme}>
      {/* Honour the OS "reduce motion" setting for every animation on the site */}
      <MotionConfig reducedMotion="user">
        <ExperienceProvider>
          <CustomCursor />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ExperienceProvider>
      </MotionConfig>
    </ChakraProvider>
  );
}
