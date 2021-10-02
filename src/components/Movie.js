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

const Movie = () => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);
    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong...!</div>;

    return (
        <>
          <BreadCrumb movieTitle={movie.original_title} />
          <MovieInfo movie={movie} />
        </>
    );

}
export default Movie;