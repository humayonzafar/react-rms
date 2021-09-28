import React from 'react';

//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config.js';

//hooks
import {useMoviesFetch} from "../hooks/useHomeFetch";

//image
import defaultImage from '../images/no_image.jpg';

//components
import HeroImage from "./HeroImage";
import Grid from "./Grid"
import Thumb from "./Thumb";
import Spinner from "./Spinner"

const Home = () => {
    const {state, loading, error} = useMoviesFetch();
    console.log(state, loading, error, 'state')
    return (
        <>
            {state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> :
                null
            }
            <Grid header='Popular Movies'>
                {state.results.map(movie=>(
                   <Thumb
                    key={movie.id}
                    clickable
                    image={movie.poster_path ?
                        IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path :
                        'NoImage'}
                    movieId = {movie.id}
                    />
                    ))};
            </Grid>
            <Spinner />
        </>
    );
};
export default Home;

