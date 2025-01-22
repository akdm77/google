import React from 'react'

const FooterGoogle = () => {
  return (
    <footer className="flex flex-col  p-1  w-full h-30  dark:text-white dark:bg-neutral-950 text-gray-700 ">
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
  )
}

export default FooterGoogle
