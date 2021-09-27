import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    max-width: var(----maxWidth);
    margin: 0 auto;
    border: 1px solid red;
`;

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
   grid-gap: 2em;
`;
// export const Content = styled.div`
//    background-color: red;
//     display: flex;
//     flex-wrap: wrap;
//     flex-grow: 1;
//     justify-content: center;
//     gap:1.3em;
//     @media all and (min-width: 750px){
//     img{
//    width: 250px;
//     }
//     }
// `;