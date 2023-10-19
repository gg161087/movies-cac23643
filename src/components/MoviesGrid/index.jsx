import { useState, useEffect } from 'react';

import { MovieCard } from '../MovieCard/index.jsx';
import { getDynamic } from '../../utils/httpClient.js';

import './MoviesGrid.css'

export const MoviesGrid = ({page}) => {    

    const [movies,setPeliculas]= useState([])

    useEffect(()=>{
        getDynamic(`/discover/movie?page=${page}`).then((data)=>{        
            setPeliculas(data.results)
        })
    },[])
    
    return (
        <div className="container">
            {movies.map((movie) => (   
                <MovieCard movie={movie} key={movie.id}></MovieCard>            
            ))}            
        </div>
    )
}