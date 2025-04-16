import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../index.css';

const Navbar = () => {
  console.log(window.innerHeight)
  return (
    <div className='flex fixed flex-col h-full justify-center items-center'>
      <Header />
      <ul className='text-green-50 w-5/6  p-10 '>
        <li className='cursor-pointer list-item blue-transition' onClick={() => window.scrollTo(0,0)}>- Sobre</li>
        <li className='cursor-pointer list-item' onClick={() => window.scrollTo(0,730)}>- Projetos</li>
        {/*         <li className='cursor-pointer list-item' onClick={() => window.scrollTo(0,1900)}>- Experiência</li> */}
        <li className='cursor-pointer list-item' onClick={() => window.scrollTo(0,2800)}>- Habilidades Técnicas</li>
      </ul>
      <Footer />
    </div>
  );
}

export default Navbar;
