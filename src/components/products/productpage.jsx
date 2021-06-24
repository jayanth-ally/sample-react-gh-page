import { useEffect, useState } from "react";

import * as http from '../../utils/http';
import styles from './product.module.css';

const Product = (props) => {

    const [product,setProduct] = useState({});
    const [loader,setloader] = useState(true);
    const [active,setActive] = useState(0);
    useEffect(()=>{
        const id = props.match.params.id;
        http.getProductById(id).then(productItem => {
            setProduct(productItem);
            setloader(false);
        })
    },[])

    const handleImageClick = (i) => {
        setActive(i);
    }
    return ( loader ? <h1>Loading...</h1> : <section className={styles.product}>
        <div class={styles.left_column}>
            <img id="product-img" atl="Product Image" src={product.photos[active]}/>
        </div>
        <div class={styles.right_column}>
            <div class={styles.product_description}>
                <h1 id="name">{product.name}</h1>
                <h4 id="brand">{product.brand}</h4>
                <h3>Price: Rs <span id="price">{product.price}</span></h3>
                <div class="description">
                  <h3>Description</h3>
                  <p id="description">{product.description}</p>
                </div>
                <div class="product-preview">
                  <h3>Product Preview</h3>
                  <div class={styles.previewImg}>
                      {product.photos.map((image,i)=>{
                          return <img key={i} src={image} className={i === active ? styles.active : ""} onClick={()=>handleImageClick(i)}/>
                      })}
                  </div>
                </div>
              </div>
            <div class={styles.btn}>
                <button id="add-to-cart">Add to Cart</button>
            </div>
        </div>
    </section> );
}
 
export default Product;