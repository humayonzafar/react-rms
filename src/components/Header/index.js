import React from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg';

import {Wrapper,Content,TMDBLogoImg, NavLink} from './Header.styles';

const Header = ()=>(
    <Wrapper>
        <Content>
          <NavLink to='/'>
            HZ Movies
          </NavLink>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
)

export default Header;