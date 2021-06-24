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
        {loader ? <h1>Loading...</h1> : <div className="card-container">
            {productList.map((product, i) => {
                return <ProductCard key={i}
                    id={product.id}
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