import styled from 'styled-components';

export const Image = styled.img`
transition: all 1s;
object-fit: cover;
animation: animateFunction 0.5s;

:hover{
opacity: 0.5;
}
  @keyframes animateHeroImage{
    from{
    opacity: 0;
    }
    to{
    opacity: 1;
    }
    }
`;

