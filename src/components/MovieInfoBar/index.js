import React from 'react';

import {Wrapper, Content, Text} from "./MovieInfoBar.styles";
import {calcTime,convertMoney} from "../../helpers";

const MovieInfoBar = ({time,budget,revenue}) => (
    <Wrapper>
        <Content>
            <Text> Running Time: {calcTime(time)}</Text>
            <Text> Budget {convertMoney(budget)}</Text>
            <Text> Revenue {convertMoney(revenue)}</Text>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;