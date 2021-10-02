import {useState, useEffect, useCallback} from "react";
import API from "../API";

export const useMovieFetch = (movieID) => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

     const fetchMovie = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const movie = await API.fetchMovie(movieID);
            const credits = await API.fetchCredits(movieID);
            //Get directors data from credits
            const directors = credits?.crew.filter(member => member.job === 'Director');
            setState(
                {
                    ...movie,
                    actors: credits.cast,
                    directors
                }
            );
        } catch (e) {
            setError(true);
            console.log(e,'use fetch movie error');
        } finally {
            setLoading(false);
        }
    },[movieID]);

    useEffect(() => {
        fetchMovie();
    }, [movieID,fetchMovie])

    return {state, loading, error};
}