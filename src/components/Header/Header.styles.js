import styled from 'styled-components';

export const Wrapper = styled.div`
   background-color: var(--darkGrey);
   padding: 1.2em 0;
`;
export const Content = styled.div`
   display: flex;
   max-width: var(--maxWidth);
   margin: 0 auto;
   padding: 1.2em 1em;
   justify-content: space-between;
   align-items: center;
`;
export const LogoImg = styled.img`
    width: 150px;
    @media(min-width: 500px){
        width: 200px;
    }
`;
export const TMDBLogoImg = styled.img`
    width: 80px;
     @media(min-width: 500px){
    width: 100px;
    }
`;
