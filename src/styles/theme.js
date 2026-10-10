import { extendTheme } from "@chakra-ui/react";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"], weight: ["variable"] });

const local = localFont({
  src: "./fonts/OpenSans.ttf",
  variable: "--local-font",
});

const stylesTheme = {
  fonts: {
    body: local.style.fontFamily,
    heading: local.style.fontFamily,
    text: local.style.fontFamily,
  },
  colors: {
    egypt: "#1134A6",
    azure: "#0080FE",
    olympic: "#008ECC",
    prim: "#03989e",
    primDark: "#00696e",
    prim2: "#004aad",
    prim3: "#F2F3F5",
    prim4: "#FBF6EA",
    textPrim: "#232536",
    text: "#6D6E76",
    footer: "#21212D",
  },

  styles: {
    global: (props) => ({
      "html, body": {
        postion: "relative",
        fontSize: "16px",
        overflowX: "hidden",
        color: "textPrim",
        padding: "0",
        margin: "0",
        scrollBehavior: "smooth",
      },
      button: {
        fontWeight: "light",
      },
      main: {
        scrollBehavior: "smooth",
      },
      ".headFont": {
        fontFamily: "var(--local-font)",
      },
      ".mainPX": {
        px: ["1.2rem", "1.75rem", "3.75rem", "4.75rem", "5rem"],
      },
      ".swiper-pagination-bullet-active": {
        backgroundColor: "prim",
      },
      ".swiper-button-prev": {
        color: "prim",
        backgroundImage: "url('./arrow.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      },
      ".swiper-button-next": {
        color: "prim",
        transform: "rotate(180deg)",
        backgroundImage: "url('./arrow.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
      },
      ".swiper-button-next::after": {
        display: "none",
      },
      ".swiper-button-prev::after": {
        display: "none",
      },
      "@media all and (min-width:768px)": {
        "::-webkit-scrollbar-track": {
          background: "prim3",
        },
        "::-webkit-scrollbar": {
          width: "5px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "prim",
          borderRadius: "full",
        },
        ".yt-lite": {
          rounded: "1rem",
        },
      },
    }),
  },
};

const theme = extendTheme(stylesTheme);

export default theme;
