import React from 'react';
import PropTypes from 'prop-types';
//styles
import {Wrapper, Content, Text} from "./MovieInfoBar.styles";
//helpers
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
MovieInfoBar.propTypes = {
    time: PropTypes.string,
    budget: PropTypes.string,
    revenue: PropTypes.string,
}
export default MovieInfoBar;