import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
    --maxWidth: 1280px;
    --mobWidth: 660px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Abel', sans-serif;
}

img {
    max-width: 100%;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
}

h3 {
    font-size: 1.1rem;
    font-weight: 600;
}

p {
    font-size: 1rem;
    color: var(--white);
}
.text-center{
text-align: center;
}

.movieThumb{
@media all and (min-width:720px){
   width: 400px;
   height:400px;  
    }
}
`;

