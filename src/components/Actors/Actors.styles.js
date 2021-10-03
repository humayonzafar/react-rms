import styled from 'styled-components';

export const Wrapper = styled.div`
   position: relative;
   color: var(--white);
   background-color: var(--darkGrey);
   border-radius: 1.2em;
   padding: 0.5em;
   text-align: center;
   
   h3{
   margin: 0.6em 0 0 0;
   }
   p{
   margin: 0.5em 0;
   }
`;

export const Image = styled.img` 
   object-fit: cover;
   display: block;
   width: 100%;
   border-radius: 1em;
   :hover{
    opacity: 0.6;
   }
`;
