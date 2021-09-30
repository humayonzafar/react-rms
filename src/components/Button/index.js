import React from 'react';

import {Wrapper} from "./Button.styles";

const Button = ({text,callback})=> {
 return (
        <Wrapper type={'button'} onClick={callback}>
            {text}
        </Wrapper>
    );
}

export default Button;