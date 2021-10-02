import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--medGrey);
    color: white;
    padding: 1em;
    a{
      text-decoration: none;
      color: white;
      :hover{
      opacity: 0.8;
      }
    }
    font-size: var(--fontSmall);   
    @media all and (min-width:720px){
    font-size: var(--fontMed);   
    }
`;

export const Content = styled.div`
   max-width: var(--maxWidth);
   padding: 0 1.2em;
   margin: 0 auto;
   span{
     padding: 0.4em;
   }
`;