import React from 'react';

//styles
import {Wrapper,Image} from "./Actors.styles";

const Actor = ({name,character,imageUrl})=>(
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumbnail'/>
        <h3>{name}</h3>
        <h3>{character}</h3>
    </Wrapper>
);

export default Actor;

