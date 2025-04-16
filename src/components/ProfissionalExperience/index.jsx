import React from 'react'
import Experience from './Experience'

const index = () => {
    return (
        <div className='p-3 w-11/12 mt-2 h-screen flex flex-col justify-evenly'>
            <Experience
                experiencia={"Estagiário de Marketing"}
                periodo={"Junho/2022 - Dezembro/2022"}
                descricao={"Atuei como estagiário de Marketing na Empresa Júnior de Computação (Emcomp). Embora minha participação tenha sido breve, contribuí significativamente ao ajudar a equipe a desenvolver uma interface no Figma para um cliente."}
                />

            <Experience
                experiencia={"Pesquisador/Desenvolvedor Mobile"}
                periodo={"Novembro/2022 - Maio/2023"}
                descricao={"Atuei como pesquisador em uma iniciação científica financiada pelo CNPq, onde desenvolvi o sistema de aplicativos móveis ShapeMeApp. Durante este projeto, participei de todas as etapas do desenvolvimento, incluindo a especificação de requisitos, escolha das tecnologias, prototipação de interfaces no Figma, programação dos aplicativos, bem como testes e correções."}
            />
            <Experience
                experiencia={"Professor de Informática"}
                periodo={"Fevereiro/2023 - Julho/2023"}
                descricao={"Fui professor da disciplina de Informática Aplicada aos Recursos Humanos em um curso técnico de RH oferecido à comunidade pela Escola Estadual Professor José Borges de Morais. Este desafio envolveu ensinar alunos que não estavam acostumados a utilizar materiais online (vídeo-aulas, sites do Google, PDFs, etc.) e que tinham pouca familiaridade com softwares de escritório (Excel, Word, Gmail, etc.). Embora a adaptação tenha sido difícil, ao final do curso, os alunos já conseguiam manipular funções, gráficos e tabelas dinâmicas no Excel e enviar suas atividades por e-mail."}
                />
        </div>
    )
}

export default index
