import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/Header";
import Link from "next/link";
import React, { useState } from 'react'
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
  const [search, setSearch] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("")
  
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} dark:bg-slate-600 grid grid-rows-[20px_1fr_20px] items-center  justify-items-center justify-between h-full p-0 pb-20 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)]`}
    >
     
      <Header />

      <main className="flex flex-col h-6/6 w-full gap-8 row-start-2 items-center sm:items-center sm:justify-center ">

        <Image
          src="/googlelogo.png"
          alt="Google"
          height={200}
          width={200}
          priority
          unoptimized
          className="mt-8  sm:w-64"
        />
        <section className="flex border items-center justify-between h-10 p-2 w-11/12 rounded-full xl:w-1/2" onClick={() => setSearch(!search)}>
          <Image
            src="/icons8-pesquisar-48.png"
            width={48}
            height={48}
            alt="pesquisar"
            className="flex  size-6 "
          />
          <section className="flex ">
            <Image
              src="/google-mic.webp"
              height={100}
              width={100}
              alt="microfone"
              className="size-[35px] mr-4"
            />
            <Image
              src="/google-camera.webp"
              height={100}
              width={100}
              alt="camera"
              className="size-8 mr-2"
            />
          </section>

          
        </section>



        <section className="flex flex-col  h-2/2 w-full">
          <section className="flex justify-between">
            <h1 className="text-xl ml-5 mt-0">Pesquisas em alta</h1>
            <Image
              src="/icons8-menu-2-30.png"
              height={30}
              width={30}
              alt="menu-2"
              className="size-4 mr-2"
            />
          </section>


          <ul className="m-3">
            <li className=" p-3 pl-1">
              <Link href="www.google.com" className="flex">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <section>
                  <h3 className=" mt-1">salsicha</h3>
                  <p className="  text-sm text-gray-600 ">carne</p>
                </section>

              </Link>

            </li>
            <hr />
            <li className=" p-4 pl-1">
              <Link className="flex items-center " href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 "
                />
                <h3 className="">jogos steam black friday</h3>
              </Link>

            </li>
            <hr />
            <li className="p-4 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <h3 className=" ">

                  enquetes a fazenda 16
                </h3></Link>
            </li>
            <hr />
            <li className=" p-4 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <h3 className=" ">

                  sorteio loterias</h3></Link>
            </li>
            <hr />
            <li className=" p-4 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <h3 className="">creatina soldiers policia civil</h3></Link>

            </li>
            <hr />
            <li className=" p-4 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <h3 className="">newjeans contrato</h3></Link>
            </li>
            <hr />
            <li className=" p-4 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-4"
                />
                <h3 className="">cotação dolar hoje</h3></Link>

            </li>
            <hr />


          </ul>
        </section>
        {
          search === false
            ?
            <section className=" fixed top-0 bg-white h-screen w-screen">
              <section className="flex justify-center items-center">
                <Image onClick={()=>setSearch(!search)}
                  src="/icons8-back-48.png"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="size-6 "
                />
                <input type="text" className=" h-12 w-8/12 p-5 sm:w-10/12 border-none focus:border-none" name={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <Image
                  src="/google-mic.webp"
                  height={100}
                  width={100}
                  alt="microfone"
                  className="size-[35px] mr-4"
                />
                <Image
                  src="/google-camera.webp"
                  height={100}
                  width={100}
                  alt="camera"
                  className="size-8 mr-2"
                />
              </section>
              <hr className="mx-2"/>

              <h2 className="m-4 text-gray-600">Pesquisas em alta</h2>

              <ul className="m-3">
            <li className=" p-2 pl-1">
              <Link href="www.google.com" className="flex">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <section>
                  <h3 className=" mt-1">salsicha</h3>
                  <p className="  text-sm text-gray-600 ">carne</p>
                </section>

              </Link>

            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center " href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 "
                />
                <h3 className="">jogos steam black friday</h3>
              </Link>

            </li>
            
            <li className="p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className=" ">

                  enquetes a fazenda 16
                </h3></Link>
            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className=" ">

                  sorteio loterias</h3></Link>
            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className="">creatina soldiers policia civil</h3></Link>

            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className="">newjeans contrato</h3></Link>
            </li>
            
            <li className=" p-1 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-2"
                />
                <h3 className="">cotação dolar hoje</h3></Link>

            </li>
            
            <li className=" p-2 pl-1">
              <Link href="www.google.com" className="flex">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <section>
                  <h3 className=" mt-1">salsicha</h3>
                  <p className="  text-sm text-gray-600 ">carne</p>
                </section>

              </Link>

            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center " href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 "
                />
                <h3 className="">jogos steam black friday</h3>
              </Link>

            </li>
            
            <li className="p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className=" ">

                  enquetes a fazenda 16
                </h3></Link>
            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className=" ">

                  sorteio loterias</h3></Link>
            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className="">creatina soldiers policia civil</h3></Link>

            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className="">newjeans contrato</h3></Link>
            </li>
            
            <li className=" p-2 pl-1">
              <Link className="flex items-center" href="www.google.com">
                <Image
                  src="/arrowg.svg"
                  height={70}
                  width={70}
                  alt="arrow"
                  className="h-5 mt-1"
                />
                <h3 className="">cotação dolar hoje</h3></Link>

            </li>
            

          </ul>

            </section>
            :
            <section></section>
        }
      </main>
      <footer className="flex flex-col  p-1  w-full h-30 mt-56 sm:mt-96 lg:mt-[750px] bg-gray-100 text-gray-700 ">
        <h3 className="p-3 ">Brasil</h3>
        <hr className="m-0.5
        "/>
        <section className="flex sm:justify-center">
          <p className="text-[13px] p-3">Tema escuro:desativado</p>
          <p className="text-[13px] pt-3 ">Configurações</p>
          <p className="text-[13px] p-3">Privacidade</p>
          <p className="text-[13px] p-3">Termos</p>

        </section>

      </footer>
    </div>
  );
}
