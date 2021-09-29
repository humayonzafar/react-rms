import React, {useState,useEffect, useRef} from 'react';

import {Search, Wrapper} from "./Search.styles";

import searchIcon from "../../images/search-icon.svg"

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const firstRender = useRef(true);
    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false;
            return ;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },500);
        return ()=> clearTimeout(timer);
    },[setSearchTerm,state]);

    return (<Wrapper>
        <Search>
            <img src={searchIcon} alt='search-icon'/>
            <input
                type='text'
                placeholder='Search Movies'
                onChange={event => setState(event.currentTarget.value)}
                value={state}
            />
        </Search>
    </Wrapper>);
};

export default SearchBar;