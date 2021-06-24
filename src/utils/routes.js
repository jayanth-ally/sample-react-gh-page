const BASE_URL = process.env.NODE_ENV === "production" ? "sample-react-gh-page" : ""; 


const HOME_URL = BASE_URL + '/';
const PRODUCTS_URL = BASE_URL + '/products';
const PRODUCT_URL = BASE_URL + '/products/:id';
const MOVIES_URL = BASE_URL + '/movies';
const CART_URL = BASE_URL + '/cart';

export {
    HOME_URL,
    PRODUCTS_URL,
    PRODUCT_URL,
    MOVIES_URL,
    CART_URL
}