import axios from "axios";

const searchMovies = async (searchText) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchText}`);
    console.log(res);
    return res.data.hasOwnProperty("Search") ? res.data["Search"] : [];
}

export {
    searchMovies
}