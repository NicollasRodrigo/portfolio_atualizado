import React from 'react'
import Tecnologias from './Tecnologias'

const Projeto = ({titulo, descricao, link, tecnologias}) => {
  return (
    <div className='p-3 w-5/6 mt-2 projetos-card hover:shadow-2xl bg-green-950'>
        <h5 className=' text-green-50'>{titulo || 'Titulo'}</h5>
        <p className='text-green-50 text-small text-wrap '>{descricao || "Descrição"}</p>
        <p className='text-green-50 text-small'>Link: <a href={link} target='_blank' className='text-green-400'>{link}</a></p>
        <div className='flex flex-wrap'>
        {tecnologias && tecnologias.map((tecnologia) => <Tecnologias nome={tecnologia}/>)}

        </div>
    </div>
  ) 
}

export default Projeto
