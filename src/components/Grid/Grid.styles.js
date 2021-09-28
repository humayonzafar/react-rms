import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    max-width: var(----maxWidth);
    margin: 0 auto;
    border: 1px solid red;
    
     h2{
     color: black;
   font-size: var(--fontMed);
  @media all and (min-width:720px){
    font-size: var(--fontBig);   
    }
  }
`;

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill,1fr);
   grid-gap: 2em;
   max-width: 100%;
   
    @media all and (min-width:720px){
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr)); 
    }
`;