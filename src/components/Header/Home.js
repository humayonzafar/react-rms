import React from 'react';
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from './../../config.js';
//hooks
import {useMoviesFetch} from "../../hooks/useHomeFetch";
//image
import defaultImage from '../../images/no_image.jpg';
//components
import HeroImage from "../HeroImage";
import Grid from "./../Grid"
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
                {/*{state.results.map(movie=>(*/}
                {/*<div key={movie.id}>{movie.title}</div>*/}
                {state.results.map(movie=>(
                    <div key={movie.id}>
                        {movie.title}
                    </div>

                    ))};
            </Grid>
        </>
    );
};
export default Home;

