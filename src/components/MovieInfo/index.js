import React from 'react';
import PropTypes from 'prop-types';
//styles
import {Wrapper,Content,Text} from "./MovieInfo.styles";
import Thumb from "../Thumb";
//config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
import NoImage from '../../images/no_image.jpg';
const MovieInfo = ({movie})=>(
   <Wrapper backdrop={movie.backdrop_path}>
    <Content>
        <Thumb
        image={
            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
        }
        clickable={false}
        ></Thumb>
        <Text>
        <h1>{movie.title}</h1>
        <h3>Plot</h3>
        <h1>{movie.overview}</h1>
            <div className='rating-directors'>
                <div>
                    <h3>Rating</h3>
                    <div className='score'>{movie.vote_average}</div>
                </div>
                <div className='director'>
                    <h3>DIRECTOR{movie.directors.length>1 ? 'S' : ''}</h3>
                    {movie.directors.map(director=>(
                        <p key={director.credit_id}>{director.name}</p>
                    ))}
                </div>
            </div>
        </Text>
    </Content>
   </Wrapper>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
};
export default MovieInfo;