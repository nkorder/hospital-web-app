import React from 'react';
import {Container, ContenedorMision, ContenedorVision, ContenedorValores, Image} from '../components/containers/quienes-somos-containers';
import Slider from '../components/slider/Slider'


const quienesSomos = () =>{
    return (
        <>
            <div
            style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh'
            }}>
                <h1>Bienvenido a Clinica Santa Clara</h1>
            </div>
            <div>
            <Container>
                <p>Somos una clinica del Sector Privado, que ofrece una atención médica oportuna, digna, respetuosa, profesional e integral, dentro de un entorno de cálidez y trabajo en equipo, creando un ambiente confortable y seguro para nuestros pacientes y usuarios. Nuestra política de calidad se basa en mejorar la prestación de nuestros servicios de salud.</p>
                <Slider/>
            </Container>

            <ContenedorMision>
                <h2>Misión</h2>
                <p>Brindar un servicio médico integral de calidad 
                a nuestros pacientes mediante la incorporación de 
                tecnología de punta.</p>
            </ContenedorMision>

            <ContenedorVision>
                <h2>Visión</h2>
                <p>Ser el hospital lider socialmente responsable a 
                nivel regional siendo reconocidos por la mejor calidad 
                en el servicio.</p>
            </ContenedorVision>

            <ContenedorValores>
                <h2>Valores</h2>
                <ul>
                    <li>Ética profesional</li>
                    <li>Compromiso</li>
                    <li>Cálidez humana</li>
                </ul>
            </ContenedorValores>
            
            </div>
        </>

    );
};

/*
1er <div> : Encabezado que incluye el titulo de la pagina
2do <div>: Contenido del cuerpo de la pagina 
*/

export default quienesSomos;
