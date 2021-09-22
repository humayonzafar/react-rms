import React from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg';
import RMBDBLogo from '../../images/react-movie-logo.svg';

import {Wrapper,Content,LogoImg,TMDBLogoImg} from './Header.styles';

const Header = ()=>(
    <Wrapper>
        <Content>
            <LogoImg src={RMBDBLogo} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
)

export default Header;