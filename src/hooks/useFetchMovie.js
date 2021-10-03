import {useState, useEffect, useCallback} from "react";
//api
import API from "../API";
import {isPersisted} from "../helpers";

export const useMovieFetch = (movieID) => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

     const fetchMovie = useCallback(async () => {
        try {
            setLoading(true);
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
        const sessionState = isPersisted(movieID);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        else fetchMovie();
    }, [movieID,fetchMovie]);

    useEffect(()=>{
        sessionStorage.setItem(movieID,JSON.stringify(state));
    },[movieID,state]);

    return {state, loading, error};
}