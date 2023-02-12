import React from 'react';
import maps from '../img/mapa.jpg'
import '../pagCss/pagMaps.css'
const PagMaps = () => {
    return (
        <div className="cont-maps">
            <div className='pagMaps'>
            <img src={maps} alt="" />
        </div>
        <div className="inf-maps">
            <h2>Contactame</h2>
            <div className="llamar">
                <div className="llamar-icon">
                    <i className="fa-brands fa-whatsapp"></i><h4 className='whatsapp'>Whatsapp</h4>
                </div>
                <div className="llamar-icon">
                    <i className="fa-solid fa-envelope"></i><h4 className='gmail'>Gmail</h4>
                </div>
                <div className="llamar-icon">
                    <i className="fa-brands fa-facebook"></i><h4 className='facebook'>Facebook</h4>
                </div>
                <div className="llamar-icon">
                    <i className="fa-brands fa-instagram"></i><h4 className='instagram'>Instagram</h4>
                </div>
      </div>
            <div className="como-llegar">
                <h2>Direccion</h2>
                <button className='butom-maps'>
                    <h3>como llegar</h3>
                </button>
            </div>
        </div>
        </div>
        
    );
};

export default PagMaps;