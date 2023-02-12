import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import logo from'./logo/logo-maria.png';
import PagunoCapa from './pag/PagunoCapa';
import PagDosCapa from './pag/PagDosCapa';
import PagTrescapa from './pag/PagTrescapa';
import PagMaps from './pag/PagMaps';

function App() {
  const [color,setColor]=useState("container");
const [menu,SetName]=useState("menu")
useEffect(()=>{
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},[])
function handleScroll() {
  if (window.scrollY > 50) {
    setColor("new");
    SetName("newmenu");
  } else {
    setColor("container");
    SetName("menu")
  }
}
  

  return (
    <div className="App">
       <div className={color}>
        <div id='cajamenu' className="caja-menu">
        <div className="logo">
            <img src={logo} alt="" />
            <label className='menu-cel' htmlFor="btn-menu"><i className="fa-solid fa-bars"></i></label>
        </div>
        <nav className={menu}>
          <a className='menupc' href="#capa0">INICIO</a>
          <a className='menupc' href="#capa1">BLOG</a>
          <a className='menupc' href="#capa3">NOSOTROS</a>
          <a className='menupc' href="#capa4">CONTACTOS</a>
        </nav>
      </div>
      
      
      <input type="checkbox" id='btn-menu' />
      <div className="containe-menu">
        <div className="cont-menu">
        <nav >
          <a href="#capa0">INICIO</a>
          <a href="#capa1">NOSOTROS</a>
          <a href="#capa3">BLOG</a>
          <a href="#capa4">CONTACTOS</a>
        </nav>
        <label htmlFor="btn-menu"><i className="fa-solid fa-x"></i></label>
        </div>
      </div>
      </div>
      <section id='capa0'><PagunoCapa/></section>
      <section id='capa1'><PagDosCapa/></section>
      <section id='capa3'><PagTrescapa/></section>
      <section id='capa4'><PagMaps/></section>
      <section id='capa5'></section>
    </div>
   
  )
}

export default App
