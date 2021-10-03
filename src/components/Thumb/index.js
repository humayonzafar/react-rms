import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
//styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, classes}) => (
    <div>
        {clickable ?
            (<Link to={`/${movieId}`}>
                <Image className={classes} src={image} alt={'movie-thumb'}/>
            </Link>) :
            <Image src={image} alt={'movie-thumb'}/>
        }
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
};
export default Thumb;