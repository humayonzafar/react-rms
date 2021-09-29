import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    height: 100px;
    width: 100%;
    padding: 0 1.2em;
    display: flex;
    align-items: center;
`;
export const Search = styled.div`
    position: relative;
    width: 100%;
    height: 55px;
    margin: 0 auto;
    border-radius: 40px;
    max-width: var(----maxWidth);
    background-color: var(--medGrey);
 
    img{
    width: 20px;
    position: absolute;
    z-index: 100;
    top: 0.9em;
    left: 2.3em;
     @media all and (min-width:720px){
      width: 25px;   
    }
    }
    
    input{
    position: absolute;
    width: 95%;
    left: 4px;
    top:12px;
    padding: 0 0 0 4em;
    height: 30px;
    color: white;
    background-color: var(--medGrey);
    border: 0;
    font-size: var(--fontSmall);
    
    :focus{
      outline: none;
    }
    @media all and (min-width:720px){
    font-size: var(--fontMed);   
    }
  }
`;
