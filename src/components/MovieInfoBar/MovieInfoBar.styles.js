import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    width: 100%;
    color: white;
`;

export const Content = styled.div`
   width: 80%;
   max-width: var(--maxWidth);
   margin: 0 auto;
   align-items: center;
   justify-content: start;
   padding: 0.5em;
   @media all and (min-width:720px){
    display: flex;
    gap: 1em;
    padding: 0;
  }
`;

export const Text = styled.div`
      width: 100%;
      padding: 1em;
      border-radius: 1.2em;
      background-color: var(--medGrey);
      display: flex;
      justify-content: center;
      margin: 1em;
      @media all and (min-width:720px){
      display: flex;
     width: 30%;
     gap: 1em;
  }
`;

