import React from 'react';

import {Wrapper,Content} from "./Grid.styles";

const Grid = ({header,children})=>(

    <Wrapper>
        <h2>{header}</h2>
        <Content>
            {children}
        </Content>
    </Wrapper>

);

export default Grid;