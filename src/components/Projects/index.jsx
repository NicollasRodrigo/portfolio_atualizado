import React from 'react'
import Projeto from './Projeto'

const Projects = () => {
    return (
        <div className=''>
            <Projeto
                titulo="Plataforma de Cursos Online"
                descricao={`Recentemente, desenvolvi um projeto fictício
de um site de ensino, inspirado em plataformas
de aulas online como o Udemy, com foco em
Desenvolvimento Web. Para isso, utilizei o
VSCode (Visual Studio Code) e construí o site
utilizando HTML, CSS e JavaScript.`}
                tecnologias={['HTML', 'CSS', 'JavaScript']}
                size='small'
            />
            <Projeto
                titulo="Cubo Mágico em Python"
                descricao={`Além disso, criei anteriormente um cubo mágico giratório com a linguagem Python..`}
                tecnologias={['Python']}
                size='small'
            />
            <Projeto titulo="Jogo da Memória"
                descricao={"Jogo da Memória em feito em HTML, CSS e JavaScript"}
                tecnologias={['JavaScript', 'HTML', 'CSS']}
                size='small'
                link='https://github.com/NicollasRodrigo/Jogo-da-Mem-ria'

            />
            <Projeto
                titulo="Calculator"
                descricao={"Calculadora feita em React e JavaScript"}
                link='https://github.com/NicollasRodrigo/calculator'
                tecnologias={['JavaScript', 'HTML', 'CSS', 'React', 'TailwindCsss']}
                size='small'

            />
            <Projeto
                titulo="Quest to do"
                descricao={"Aplicativo feito em React e JavaScript, uma lista to-do."}
                link={'https://github.com/NicollasRodrigo/Quest-Todo'}
                tecnologias={['JavaScript', 'HTML', 'CSS', 'React', 'Tailwind']}
                size='small'


            />
            <Projeto
                titulo="Gerador de Conselhos"
                descricao={"Um projeto de React feito com intuito de praticar com Axios e requisição de APIs."}
                link={'https://github.com/NicollasRodrigo/Gerador-de-conselhos'}
                tecnologias={['HTML', 'CSS', 'JavaScript', 'React', 'APIs']}
                size='small'

            />

            <Projeto
                titulo="Guilda"
                descricao={"Projeto feito em React, para praticar com rotas e APIS"}
                link={'https://github.com/NicollasRodrigo/Guilda'}
                tecnologias={['React', 'JavaScript', 'TailwindCSS', 'Rotas']}
                size='small'
            />
        </div>
    )
}

export default Projects
