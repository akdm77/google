import  MainGoogle  from "./components/MainGoogle";
import Header from "./components/Header";
import localFont from "next/font/local";
import FooterGoogle from "./components/FooterGoogle";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

 
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  flex flex-col justify-stretch  items-center bg-white text-black dark:bg-neutral-900 dark:text-white justify-items-center h-screen p-0 pb-20 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)]`}
    >
     <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
     />
      <Header />
      <MainGoogle/>
      
     <FooterGoogle/>
    </div>
  );
}
