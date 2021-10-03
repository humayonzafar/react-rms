import React from 'react';
import PropTypes from 'prop-types';
//styles
import {Wrapper, Image} from "./Actors.styles";

const Actor = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumbnail'/>
        <h3>{name}</h3>
        <h3>{character}</h3>
    </Wrapper>
);
Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
};
export default Actor;

