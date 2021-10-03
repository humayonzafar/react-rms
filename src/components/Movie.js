import React from 'react';
import {useParams} from 'react-router-dom';
//config
import {POSTER_SIZE, IMAGE_BASE_URL} from "../config";
//components
import Spinner from './Spinner';
import Grid from './Grid';
import BreadCrumb from "./BreadCrumb";
//hook
import {useMovieFetch} from "../hooks/useFetchMovie";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import {Wrapper} from "./MovieInfo/MovieInfo.styles";

const Movie = () => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);
    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong...!</div>;
    console.log(movie,'movie')
    return (
        <>
          <BreadCrumb movieTitle={movie.original_title} />
          <MovieInfo movie={movie} />
          <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
        </>
    );

}
export default Movie;