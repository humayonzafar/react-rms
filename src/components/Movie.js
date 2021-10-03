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
import noImage from "../images/no_image.jpg";
import Actor from "./Actors";

const Movie = () => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId);
    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong...!</div>;
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            {movie.actors.length > 0 ? <Grid header='Actors'>
                {movie.actors.map((actor, index) => (
                    <Actor
                        key={index}
                        imageUrl={actor.profile_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` :
                            noImage}
                        name={actor.name}
                        character={actor.character}
                    />
                ))}
            </Grid> : <h2 className={'text-center'}>No Related Data Found..!</h2>
            }
        </>
    );
}
export default Movie;