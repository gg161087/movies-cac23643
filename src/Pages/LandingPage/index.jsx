import { useState, useEffect } from 'react';

import { Header } from '../../components/Header/index.jsx';
import { MoviesGrid } from '../../components/MoviesGrid/index.jsx';
import { FooterBar } from '../../components/FooterBar/index.jsx';

import { getDynamic } from '../../utils/httpClient.js';

import './LandingPage.css'

export const LandingPage = () => { 

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        getDynamic(`/discover/movie?page=${currentPage}`).then((data)=>{        
            setMovies(data.results)
        })    
    }, [currentPage]);

    return (
        <>
            <Header title='Movies CAC23643'></Header>
            <MoviesGrid movies={movies}></MoviesGrid>
            <FooterBar 
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}>
            </FooterBar>
        </>
    )
}