import React from 'react'
import Tecnologias from '../Projects/Tecnologias';
const Index = () => {

    const tecnologias = [
        {
            nome: 'JavaScript'
        },
        {
            nome: 'React'
        },
        {
            nome: 'HTML'
        },
        {
            nome: 'CSS'
        },
        {
            nome: 'Python'
        },
        {
            nome: 'Tinkercard'
        },
        {
            nome: 'Open Roberta Lab'
        },
        {
            nome: 'Lego Education'
        },
        {
            nome: 'Gamefroot'
        },
        {
            nome: 'Game Maker'
        },
        {
            nome: 'Unity'
        },
        {
            nome: 'Godot'
        },
        {
            nome: 'Roblox Studio'
        },
        {
            nome: 'Blender'
        },
        {
            nome: 'Piskel'
        },
        {
            nome: 'MagicaVoxel'
        }
    ]
    return (
        <div className='flex flex-col flex-wrap p-2 w-11/12 h-screen'>
            <h3 className='p-3 text-green-50'>Habilidades técnicas:</h3>
            <p className='text-description text-green-50 p-3'>Desenvolvidas ao longo da escola, por empresas de ensino (Udemy, Alura, etc.), Youtube, CTRL + Play à parte:</p>
            <div className='flex flex-wrap'>
                {
                    tecnologias.map((tecnologia) =><div className='m-1' key={tecnologia.nome}>  <Tecnologias  nome={tecnologia.nome} /></div>)
                }
            </div>

        </div>
    );
};

export default Index
