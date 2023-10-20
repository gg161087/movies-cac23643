import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/index.jsx';
import { FooterBar } from '../../components/FooterBar/index.jsx';
import { Spinner } from '../../components/Spinner/index.jsx';

import { getDynamic } from '../../utils/httpClient.js';

import './DetailMovie.css';

export const DetailMovie = () => {
    const {id} = useParams(); 
    
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {        
        setLoading(true);
        getDynamic(`/movie/${id}`).then((data) => {
            setMovie(data);
            setLoading(false)
            console.log(movie);   
        });
    }, [id]);

    if(loading){
        return < Spinner/>
    }
    
    if (!movie) {
        return null;
    }
    const pathFront = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const pathBack = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return (
        <>
            <Header title={movie.title}></Header>
            <div className="container_details">
                <div className="details">
                    <div className="details__img">
                        <img src={pathFront} alt={movie.title}/>
                    </div>
                    <div className="details__text">
                        <h2 className="details__title">{movie.original_title}</h2>
                        <p>
                            <strong>Generos:</strong>
                            {movie.genres.map((genre) => genre.name).join(", ")}
                        </p>
                        <p>{movie.overview}</p>
                        <img src={pathBack}/>               
                    </div>
                </div>
            </div>
            <FooterBar handleHome={true}></FooterBar>
        </>
    )
}