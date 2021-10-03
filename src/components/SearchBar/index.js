import React, {useState,useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
//search
import {Search, Wrapper} from "./Search.styles";
//images
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
SearchBar.propTypes = {
    callback: PropTypes.func
}
export default SearchBar;