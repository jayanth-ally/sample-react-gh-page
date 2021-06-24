import { useEffect, useState } from "react";

import ProductCard from "./productCard";
import * as http from '../../utils/http';

const ProductsComponent = () => {

    const [productList, setProductList] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        http.getProducts().then(productsList => {
            setProductList(productsList)
            setLoader(false)
        })
    }, [])

    return (<>
        <nav class="navbar navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" style={{ color: 'white' }}>Navbar</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        {loader ? <h1>Loading...</h1> : <div className="card-container">
            {productList.map((product, i) => {
                return <ProductCard key={i}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    image={product.preview}
                    description={product.description}
                />
            })}
        </div>}
    </>);
}

export default ProductsComponent;