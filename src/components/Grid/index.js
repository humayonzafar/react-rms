import React from 'react';
import PropTypes from 'prop-types';
//styles
import {Wrapper,Content} from "./Grid.styles";

const Grid = ({header,children})=>(

    <Wrapper>
        <h2>{header}</h2>
        <Content>
            {children}
        </Content>
    </Wrapper>

);
Grid.propTypes = {
    header : PropTypes.string
}
export default Grid;