import {useEffect, useState} from "react";
import API from "../API";

const initialMovieObject = {
    page: 0,
    results: [],
    total_page: 0,
    total_results: 0,
};

export const useMoviesFetch = () => {

    const [state, setState] = useState(initialMovieObject);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (searchTerm = '', page) => {
        try {
            setError(false);
            setloading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (e) {
            setError(true);
        } finally {
            setloading(false);
        }
    }
//initial render for mounted
    useEffect(() => {
        fetchMovies('', 1);
    }, []);

    return {state,loading,error};
}