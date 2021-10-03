import {useEffect, useState} from "react";
import API from "../API";
//helpers
import {isPersisted} from "../helpers";

const initialMovieObject = {
    page: 0,
    results: [],
    total_page: 0,
    total_results: 0,
};

export const useMoviesFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [state, setState] = useState(initialMovieObject);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovies = async (searchTerm = '', page) => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (e) {
            setError(true);
            console.log(e,'use home fetch error');
        } finally {
            setLoading(false);
        }
    }
//initial render and search
    useEffect(() => {
        if(!searchTerm) {
            const sessionState = isPersisted('homeState');
            if(sessionState){
                setState(sessionState);
                setLoading(false);
                return ;
            }
        }
        setState(initialMovieObject);
        fetchMovies(searchTerm, 1);
    }, [searchTerm]);

    //clicked on load more button
    useEffect(() => {
        if(!isLoadingMore) return ;
        fetchMovies(searchTerm, state.page+1);
        setIsLoadingMore(false);
    }, [isLoadingMore,searchTerm,state.page]);

    useEffect(()=>{
       if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state));
    },[searchTerm,state]);

    return {state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore};
}