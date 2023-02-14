import React from 'react';
import '../pagCss/imgane-estatico.css'
const PagTrescapa = () => {
    return (
        <div>
            <div className="imagen-estatico">
                <div className="cap-pagtres">

                
                <div data-aos="zoom-in" className="conte-letras">
                    <h1>QUIENES SOMOS</h1>
                <p>Somos una ferretería multimarca que distribuye al por mayor y menor toda una gama de productos electricos de primera calidad para el rubro doméstico e industrial. Ademas somos distribuidores autorizados de la marca KBA.</p>
                </div>
                <div data-aos="zoom-in-down" className="icon-p">
                    <div className="icon-ps">
                    <i className="fa-solid fa-truck"></i>
                    <h3>delivery</h3>
                    </div>
                    <div className="icon-ps">
                    <i className="fa-solid fa-1"></i><i className="fa-solid fa-0"></i>
                    <h3>Años de</h3>
                    <h3>Experiencia</h3>
                    </div>
                    <div className="icon-ps">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Compromiso</h3>
                    </div>
                    <div className="icon-ps">
                   <i class="fa-solid fa-wrench"></i>
                    <h3>seguridad</h3>
                    </div>
                </div>
                 </div>
                 </div>
        </div>
    );
};

export default PagTrescapa;