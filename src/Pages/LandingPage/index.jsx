import { Header } from '../../components/Header/index.jsx';
import { MoviesGrid } from '../../components/MoviesGrid/index.jsx';
import { FooterBar } from '../../components/FooterBar/index.jsx';

import './LandingPage.css'

export const LandingPage = () => {
    const buttons = [{id:'btn_previus', text:'Anterior'}, {id:'btn_next', text:'Siguiente'}]
    return (
        <>
            <Header title='Movies CAC23643'></Header>
            <MoviesGrid></MoviesGrid>
            <FooterBar buttons={buttons}></FooterBar>
        </>
    )
}