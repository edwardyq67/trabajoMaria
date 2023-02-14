import React from 'react';
import producto0 from '../producctos-img/WhatsApp_Image_2023-02-07_at_12.34.37_PM-removebg-preview.png'
import producto1 from '../producctos-img/producto1.png'
import producto2 from '../producctos-img/producto2.png'
import producto3 from '../producctos-img/producto3.png'
import producto4 from '../producctos-img/producto4.png'
import producto5 from '../producctos-img/producto5.png'
import producto6 from '../producctos-img/producto6.png'
import producto7 from '../producctos-img/producto7.png'
import producto8 from '../producctos-img/producto8.png'
import producto9 from '../producctos-img/producto9.png'
import producto10 from '../producctos-img/producto10.png'
import producto11 from '../producctos-img/producto11.png'
import '../pagCss/pagDos.css'
const PagDosCapa = () => {
    return (
        <div className='pagdos'>
             <h3 data-aos="fade-right">Productos</h3>
            <div className="contenidos" data-aos="zoom-in-up">
               
                <div className="contenido">
                    <img src={producto0} alt="" />
                    <div className="contenido-h2">
                        <h2>PITON - BRONCE</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto1} alt="" />
                    <div className="contenido-h2">
                        <h2>UNION SIMPLE - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto2} alt="" />
                    <div className="contenido-h2">
                        <h2>YEE - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto3} alt="" />
                    <div className="contenido-h2">
                        <h2>CRUZ - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto4} alt="" />
                    <div className="contenido-h2">
                        <h2>UNION UNIVERSAL - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto5} alt="" />
                    <div className="contenido-h2">
                        <h2>TEE - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto6} alt="" />
                    <div className="contenido-h2">
                        <h2>CODO 45º - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto7} alt="" />
                    <div className="contenido-h2">
                        <h2>CODO CACHIMBO - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto8} alt="" />
                    <div className="contenido-h2">
                        <h2>CODO 90º - FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto9} alt="" />
                    <div className="contenido-h2">
                        <h2>NIPLE-FIERRO GALVANIZADO</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto10} alt="" />
                    <div className="contenido-h2">
                        <h2>NIPLE-BRONCE</h2>
                    </div>
                    
                </div>
                <div className="contenido">
                    <img src={producto11} alt="" />
                    <div className="contenido-h2">
                        <h2>ADAPTADOR CORTO.BRONCE</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PagDosCapa;