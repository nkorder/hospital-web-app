import React from 'react';
import {Container, TopContainer, SmallContainer1, SmallContainer2, Image} from '../components/containers/nuestros-servicios-containers';
//import imageName from '../components/img/hospital-instalaciones-1.png';
import Slider from '../components/slider/Slider'
import imgQuirofano from '../components/img/quirofano.png';
import imgSalaExpulsion from '../components/img/sala-de-expulsion.png';
import imgTomografia from '../components/img/tomografia.png';


const nuestrosServicios = () =>{
    return (
        <>
            <div
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh'
            }}>
                <h1>Nuestros Servicios</h1>
            </div>
            <div>
            <TopContainer>
                <center><h2>Contamos con 2 quirófanos</h2></center>
                <center><img src={imgQuirofano} className="img-quirofano" alt=''/></center>
            </TopContainer>
            <SmallContainer1>
                <center><h2>Sala de expulsión</h2></center>
                <center><img src={imgSalaExpulsion} className="img-sala-expulsion" alt=''/></center>
            </SmallContainer1>
            <SmallContainer2>
                <center><h2>Tomografía</h2></center>
                <center><img src={imgTomografia} className="img-tomografia" alt=''/></center>
            </SmallContainer2>
            
            </div>
        </>

    );
};

/*
1er <div> : Encabezado que incluye el titulo de la pagina
2do <div>: Contenido del cuerpo de la pagina 
*/

export default nuestrosServicios;
