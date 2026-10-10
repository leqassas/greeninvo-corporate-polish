import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/styles/Layout";
import styledTheme from "@/styles/theme";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={styledTheme}>
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
