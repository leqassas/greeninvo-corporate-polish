import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollBtn from "@/components/ScrollBtn";
import { Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"], weight: ["variable"] });

export default function Layout({ children }) {
  return (
    <>
      <nav className={open.className}>
        <Nav />
      </nav>
      <ScrollBtn />
      <main className={open.className}>{children}</main>
      <footer className={open.className}>
        <Footer />
      </footer>
    </>
  );
}
