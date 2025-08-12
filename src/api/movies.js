import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async dispatch => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=marvel`;

    try{
        const { data } = await axios.get(url);
        dispatch(setMovies(data.Search));
        return data.Search;
    }
    catch(err){
        return err;
    }
}
