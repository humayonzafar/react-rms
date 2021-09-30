import {useEffect, useState} from "react";
import API from "../API";

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
    const [loading, setLoading] = useState(false);
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
        } finally {
            setLoading(false);
        }
    }
//initial render and search
    useEffect(() => {
        setState(initialMovieObject);
        fetchMovies(searchTerm, 1);
    }, [searchTerm]);

    //clicked on load more button
    useEffect(() => {
        console.log(isLoadingMore,'isLoadingMore');
        if(!isLoadingMore) return ;
        fetchMovies(searchTerm, state.page+1);
        setIsLoadingMore(false);
    }, [isLoadingMore,searchTerm,setIsLoadingMore]);

    return {state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore};
}