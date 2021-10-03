import styled from 'styled-components';

export const Wrapper = styled.button`
   display: block;
   background-color: var(--darkGrey);
   margin: 1.2em auto;
   color: white;
   padding: 0.85em 1.85em;
   width: 30%;
   text-align: center;
   max-width: 200px;
   border-radius: 100px;
   transition: all 0.5s;
   font-size: var(--fontMed);
   min-width: 10em;
   :hover{
    cursor: pointer;
    opacity: 0.8;
   }
   @media all and (min-width:720px){
    font-size: var(--fontBig); 
    }
   
`;
