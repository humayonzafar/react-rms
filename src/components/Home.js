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
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
    const {state, loading, error,searchTerm, setSearchTerm ,setIsLoadingMore} = useMoviesFetch();
    console.log(state, loading, error,searchTerm)
    if(error) return  <div>Something went wrong...</div>;
    return (
        <>
            {!searchTerm && state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                :
                null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie=>(
                   <Thumb
                    key={movie.id}
                    clickable
                    image={movie.poster_path ?
                        IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path :
                        defaultImage}
                    movieId = {movie.id}
                    />
                    ))};
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={(()=>setIsLoadingMore(true))} />
            )};
            {!loading && state.results.length<=0 &&
            <h2 className={'text-center'}>No Records Found..!</h2>}

        </>
    );
};
export default Home;

