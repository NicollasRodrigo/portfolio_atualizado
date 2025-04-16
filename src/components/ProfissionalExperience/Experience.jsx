import React from 'react'

const Experience = ({experiencia, periodo, descricao}) => {
    console.log(window.scrollX)

    return (
        <div className=' w-5/6 mt-2'>
            <h3 className=' text-green-50'>{experiencia || 'Experiencia'}</h3>
            <h4 className='mt-1 text-green-50'>{periodo || 'Período'}</h4>
            <p className='mt-1 text-justify text-green-50 text-small text-wrap'>{descricao || "Descrição"}</p>

        </div>
    )
}

export default Experience
