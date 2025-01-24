import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [menuCirculado, setMenuCirculado] = useState<boolean>(false);

  return (
    <header className="flex w-full items-center  justify-between ">
      <section className="flex w-5/6  md:w-full">
        <section className="h-5 w-6  mr-5">
          {menu == true ? (
            <section>
              <section
            onClick={() => {
              setMenu(!menu);
              
            }}
            className="h-screen w-screen  absolute bottom-0 right-0 overflow-hidden  bg-transparent"
            ></section>
            <section className="flex flex-col dark:bg-neutral-800  justify-between absolute top-0 p-0 m-0  size-full  md:h-[90%]  sm:w-6/12 xl:h-5/6 xl:w-4/12 sm:rounded-3xl 2xl:h-auto sm:right-5 sm:top-16 lg:h-5/6 bg-gray-200">
              <section>
                <header className="sm:h-1/6 ">
                  <section className="flex justify-between text-2xl sm:h-1/2">
                    <h1 className="flex justify-center items-center w-screen ml-8 p-5 antialiased font-medium">
                      Google
                    </h1>
                    <button className="" onClick={() => setMenu(!menu)}>
                      <Image
                        src="/icons8-close-24.png"
                        width={50}
                        height={50}
                        alt="-close"
                        className="mr-7 size-5"
                        unoptimized
                      />
                    </button>
                  </section>

                  <section className="flex justify-center">
                    <Link
                      className=" bg-blue-700 text-white px-[25px] py-[12px] rounded-full text-sm"
                      href="https://accounts.google.com/InteractiveLogin?continue=https://www.google.com/?noiga%3D1&ec=GAZAAQ&hl=pt-BR&passive=true&ifkv=AcMMx-f9ynxoG_5F1YciUerci3XHV0OLzPSl6bRh7c-fGi5O8-T00hN4YD-55R8lQN0ZXXWpAtwWHg"
                    >
                      Fazer login
                    </Link>
                  </section>
                </header>
                <section className="w-full flex justify-center ">
                  <hr className="w-11/12 m-7  bg-gray-400" />{" "}
                </section>
                <main className="">
                  <section>
                    <h3 className="ml-7 mb-2 dark:text-white text-gray-800 text-sm font-light">
                      Mais de Pesquisas Google
                    </h3>
                    <section className="flex  flex-col items-center">
                      <section className="flex dark:bg-neutral-900 justify-between shadow items-center w-11/12 p-4 mt-1 rounded-t-3xl rounded-b-md bg-white">
                        <section className="flex items-center">
                          <Image
                            src="/SafeSearch.jpeg"
                            width={60}
                            height={60}
                            alt="-safeSearch"
                            className=" size-9  mr-2 -ml-1"
                            unoptimized
                          />
                          <h2 className="font-medium">SafeSearch</h2>
                        </section>

                        <p className="text-xs font-light">Filtro ativado</p>
                      </section>
                      <section className="flex dark:bg-neutral-900 justify-between shadow-sm items-center w-11/12 p-4 mt-[1px] rounded-t-md rounded-b-md bg-white">
                        <section className="flex ">
                          <Image
                            src="/globe.svg"
                            width={60}
                            height={60}
                            alt="-globe"
                            className=" size-6 mr-3"
                            unoptimized
                          />
                          <h2 className="font-medium">Idioma(Language)</h2>
                        </section>

                        <p className="text-xs font-light">Portugues(Brasil)</p>
                      </section>
                      <section className="flex dark:bg-neutral-900 justify-between shadow-sm items-center w-11/12 p-4 mt-[1px] rounded-t-md rounded-b-md bg-white">
                        <section className="flex">
                          <Image
                            src="/R.png"
                            width={60}
                            height={60}
                            alt="-theme"
                            className=" size-6 mr-3"
                            unoptimized
                          />
                          <h2 className="font-medium">Tema escuro</h2>
                        </section>

                        <p className="text-xs font-light">
                          Padrao do Dispositivo
                        </p>
                      </section>
                      <section className="flex dark:bg-neutral-800 justify-between items-center w-11/12  bg-gray-200">
                        <section className="flex dark:bg-neutral-900 justify-end items-center w-1/2  p-2 md:p-3 lg:py-6 xl:py-3 mr-[1px] mt-[1px] rounded-r-md rounded-b-3xl rounded-tl-md bg-white">
                          <Image
                            src="/icons8-setting-50.png"
                            width={60}
                            height={60}
                            alt="-setting"
                            className=" size-6 mr-3 ml-2"
                            unoptimized
                          />
                          <h2 className="flex justify-end shadow-sm font-medium ">
                            Mais configuracoes
                          </h2>
                        </section>
                        <section className="flex dark:bg-neutral-900 w-1/2 p-5 sm:p-6 mt-[1px] justify-start rounded-l-md rounded-b-3xl rounded-tr-md bg-white">
                          <Image
                            src="/icons8-help-50.png"
                            width={60}
                            height={60}
                            alt="-help"
                            className=" size-6 mr-3"
                            unoptimized
                          />
                          <h2 className=" shadow-sm flex justify-center font-medium ">
                            {" "}
                            Ajuda
                          </h2>
                        </section>
                      </section>
                    </section>
                  </section>
                </main>
              </section>
              <footer className="flex justify-center">
                {menu === true ? (
                  <section className="mb-12 items-end flex justify-center">
                    <span>
                      <p>Politica de privacidade</p>
                    </span>
                    <Image
                      src="/icons8-full-stop-24.png"
                      width={60}
                      height={60}
                      alt="-ponto"
                      className=" size-2 m-2"
                      unoptimized
                    />
                    <span>
                      <p>Termos de servicos</p>
                    </span>
                  </section>
                ) : (
                  <section></section>
                )}
              </footer>
            </section>
            </section>
          ) : (
            <section
              className={`${!menu === true ? "m-3 size-8 " : "hidden"} `}
              onClick={() => setMenu(!menu)}
            >
              <Image
                src="/icons8-cardapio-48.png"
                width={150}
                height={150}
                alt="hamburguer"
                className=" size-8 sm:size-9  "
                unoptimized
              />
            </section>
          )}
        </section>

        <section
          className={`${
            menu === true ? " size-8 sm:mt-3 sm:-ml-8 " : "hidden"
          } `}
          onClick={() => setMenu(!menu)}
        >
          <Image
            src="/icons8-cardapio-48.png"
            width={150}
            height={150}
            alt="hamburguer"
            className=" size-9"
            unoptimized
          />
        </section>
        <ul className="flex">
          <li className="m-4 mr-0 text-xs border-b-[2px] border-blue-600 pb-3 px-2 text-gray-600 font-bold antialiased">
            <Link href="">TODAS</Link>
          </li>
          <li className="m-4 mr-0 text-xs border-b-[2px] border-blue-600 pb-3 px-2 text-gray-600 font-bold antialiased">
            <Link href="">IMAGENS</Link>
          </li>
        </ul>
      </section>

      <section className="flex items-center justify-around w-1/2 sm:justify-end ">
        <button
          onClick={() => {
            setMenuCirculado(!menuCirculado);
          }}
        >
          <Image
            src="/icons8-menu-circulado-24.png"
            width={200}
            height={200}
            alt="menu-circulado"
            unoptimized
            className="h-5 w-5 sm:mr-4"
          />
        </button>

        <Link
          className="bg-blue-700 sm:mr-8 text-white px-[11px] py-[11px] rounded-full text-sm"
          href="https://accounts.google.com/InteractiveLogin?continue=https://www.google.com/?noiga%3D1&ec=GAZAAQ&hl=pt-BR&passive=true&ifkv=AcMMx-f9ynxoG_5F1YciUerci3XHV0OLzPSl6bRh7c-fGi5O8-T00hN4YD-55R8lQN0ZXXWpAtwWHg"
        >
          Fazer login
        </Link>
      </section>

      <section>
        {menuCirculado === true  ? (
          <section>
          <section
            onClick={() => {
              setMenuCirculado(!menuCirculado);
              
            }}
            className="h-screen w-screen absolute bottom-0 right-0 overflow-hidden  bg-transparent"
          ></section>
            
            <section className="">
              <section className="bg-slate-200 rounded-2xl absolute top-[8%] right-[5%] w-5/6 h-3/6 md:w-6/12 md:h-2/4 sm:w-6/12 sm:h-4/6 lg:w-4/12 lg:h-4/6 p-3 overflow-scroll">
                <section className="flex bg-white rounded-2xl h-screen lg:mb-5 mb-2 px-4 py-8 md:py-14 flex-wrap gap-5 md:gap-14 lg:gap-8 md:mb-0 justify-center items-center">
                  <section className=" rounded-lg flex flex-col m-2  h-14 w-14 items-center justify-center  ">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="conta"
                        src="/conta.png"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Conta</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2  h-14 w-14 items-center justify-center ">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="pesquisa"
                        src="/google-icon.png"
                        className="w-8 h-9 "
                      />
                      <h2 className="p-2">Pesquisa</h2>
                    </section>
                  </section>
                  <section className="  rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="maps"
                        src="/google-maps.png"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Maps</h2>
                    </section>
                  </section>
                  <section className="   rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="youtube"
                        src="/youtube.png"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Youtube</h2>
                    </section>
                  </section>
                  <section className="  rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="Noticias"
                        src="/noticias.png"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Noticias</h2>
                    </section>
                  </section>
                  <section className="  rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="gmail"
                        src="/gmail.png"
                        className="w-9 h-9 p-1"
                      />
                      <h2 className="p-2">Gmail</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-end">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="meet"
                        src="/meet.webp"
                        className="w-16 h-16"
                      />
                      <h2 className="">Meet</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="chat"
                        src="/chat.webp"
                        className="w-8 h-8"
                      />
                      <h2 className="p-3">Chat</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="contatos"
                        src="/contatos.png"
                        className="w-8 h-8"
                      />
                      <h2 className="p-3">Contatos</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="Drive"
                        src="/drive.png"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Drive</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="Agenda"
                        src="/calendar.png"
                        className="w-14 h-9"
                      />
                      <h2 className="p-2">Agenda</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="play"
                        src="/play.webp"
                        className="w-8 h-9"
                      />
                      <h2 className="p-2">Play</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="tradutor"
                        src="/tradutor.jpeg"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Tradutor </h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="fotos"
                        src="/fotos.png"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Fotos</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="chrome"
                        src="/chrome.png"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Chrome</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="shopping"
                        src="/shopping.webp"
                        className="w-9 h-10"
                      />
                      <h2 className="p-2">Shopping</h2>
                    </section>
                  </section>
                </section>

                <section className="flex bg-white rounded-2xl h-screen lg:gap-8 px-4 py-8 flex-wrap gap-5 justify-center items-center">
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="financas"
                        src="/financas.png"
                        className="w-9 h-10"
                      />
                      <h2 className="p-2">Finanças</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="documentos"
                        src="/documentos.png"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Documentos</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="planilhas"
                        src="/planilhas.png"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Planilhas</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="apresentacoes"
                        src="/apresentacao.png"
                        className="w-11 h-10"
                      />
                      <h2 className="p-2">Apresentacoes</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="livros"
                        src="/livros.jpg"
                        className="w-14 h-10"
                      />
                      <h2 className="p-2">Livros</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="blogger"
                        src="/blogger.png"
                        className="w-8 h-10"
                      />
                      <h2 className="p-2">Blogger</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="keep"
                        src="/keep.png"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Keep</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="salvo"
                        src="/salvo.webp"
                        className="w-10 h-10"
                      />
                      <h2 className="p-2">Salvo</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="google-arts-e-culture"
                        src="/art.png"
                        className="w-10 h-10"
                      />
                      <h2 className="pt-3 line-clamp-1">
                        Google Artes & Culture
                      </h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="google-ads"
                        src="/ads.png"
                        className="w-10 h-10"
                      />
                      <h2 className="pt-2 line-clamp-1">Google Ads</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="merchant-center"
                        src="/center.png"
                        className="w-10 h-10"
                      />
                      <h2 className="pt-2 line-clamp-1">Merchant Center</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="viagens"
                        src="/viagens.png"
                        className="w-10 h-10"
                      />
                      <h2 className="pt-2">Viagens</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="formularios"
                        src="/formularios.png"
                        className="w-10 h-10"
                      />
                      <h2 className="pt-4">Formularios</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="google-store"
                        src="/store.png"
                        className="w-11 h-11 "
                      />
                      <h2 className="pt-3 line-clamp-1">Google Store</h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="chrome-web-store"
                        src="/web.png"
                        className="w-8 h-9"
                      />
                      <h2 className="pt-3 mt-2 line-clamp-1">
                        Chrome Web Store
                      </h2>
                    </section>
                  </section>
                  <section className=" rounded-lg flex flex-col m-2 h-14 w-14 items-center justify-center">
                    <section className="flex flex-col justify-center items-center">
                      <Image
                        height={100}
                        width={100}
                        alt="google-analytics"
                        src="/analitcs.png"
                        className="w-12 h-9"
                      />
                      <h2 className="pt-2 line-clamp-1">Google Analytics</h2>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        ) : (
          <section></section>
        )}
      </section>
    </header>
  );
};

export default Header;
