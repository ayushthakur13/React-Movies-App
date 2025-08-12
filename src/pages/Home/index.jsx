import { useEffect } from "react";
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";

const Home = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.movies);
    console.log(movies);

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <>
            <Navbar />
        </>
    )
}

export default Home;
