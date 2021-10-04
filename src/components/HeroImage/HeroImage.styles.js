import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(
    to bottom, 
    rgba(0,0,0,0) 41%, 
    rgba(0,0,0,0.65) 100%
    ),
    no-repeat,
    url(${({image}) => image}), var(--darkGrey);
    height: 75vh;
    min-height: 500px;
    background-position: center;
    background-size: cover, 100%;    
    position: relative;
    animation: animateHeroImage 1s;
    max-width: 100%;
    @keyframes animateHeroImage{
    from{
    opacity: 0;
    }
    to{
    opacity: 1;
    }
    }
`;
export const Content = styled.div`
  width: 80%;
  max-width: --var(--maxWidth);
  margin: 0 auto;
  padding: 1.5em;
`;
export const Text = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 10%;
    padding: 2em;
    max-width: 700px;
    height: auto; 
   h1{
   font-size: var(--fontBig);
  @media all and (min-width:720px){
    font-size: var(--fontSuperBig);   
    }
  }
    p{
   font-size: var(--fontSmall);
  @media all and (min-width:720px){
    font-size: var(--fontMed);   
  }
   }
   @media all and (min-width:720px){
   max-width: 100%;   
  }
`;
