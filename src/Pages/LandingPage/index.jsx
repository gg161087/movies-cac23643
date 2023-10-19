import { useState, useEffect } from 'react';

import { Header } from '../../components/Header/index.jsx';
import { MoviesGrid } from '../../components/MoviesGrid/index.jsx';
import { FooterBar } from '../../components/FooterBar/index.jsx';

import './LandingPage.css'

export const LandingPage = () => {
    const buttons = [{id:'btn_previus', text:'Anterior'}, {id:'btn_next', text:'Siguiente'}]

    const [page, setPage] = useState()
    useEffect(() =>{        
        setPage(page)
    })

    const handleButtonClick = (id) => {
        // Aquí puedes manejar los eventos de los botones según el id
        if (id === 'btn_previus') {
            // Lógica para el botón 'Anterior'
            page -= 1    
            console.log(`'Botón Anterior presionado' ${page}`);
        } else if (id === 'btn_next') {
            // Lógica para el botón 'Siguiente'
            page += 1           
            console.log(`'Botón Siguiente presionado' ${page}`);
        }
    };

    return (
        <>
            <Header title='Movies CAC23643'></Header>
            <MoviesGrid page={page}></MoviesGrid>
            <FooterBar buttons={buttons} onButtonClick={handleButtonClick}></FooterBar>
        </>
    )
}