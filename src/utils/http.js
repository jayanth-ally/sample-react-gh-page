import axios from "axios";

const searchMovies = async (searchText) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${searchText}`);
    return res.data.hasOwnProperty("Search") ? res.data["Search"] : [];
}

const getProducts = async () => {
    const res = await axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product");
    return res.data;
}

const getProductById = async (id) => {
    const res = await axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`);
    return res.data;
}

export {
    searchMovies,
    getProducts,
    getProductById
}