import React, {useState,useEffect} from 'react';

//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from './../../config.js';

//hooks
  import {useMoviesFetch} from "../../hooks/useHomeFetch";
//image
import defaultImage from '../../images/no_image.jpg';


const Home = () => {
      const {state,loading,error} = useMoviesFetch();
     console.log(state,loading,error,'state')
    return <div>Home</div>;
};
export default Home;

