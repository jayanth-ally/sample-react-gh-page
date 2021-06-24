import { Link } from "react-router-dom";
import styles from './product.module.css';

import { PRODUCTS_URL } from "../../utils/routes";

const ProductCard = ({ id, name, brand, price, image, description }) => {
    return <div className="card">
        <Link to={`${PRODUCTS_URL}/${id}`} className={styles.product_link}>
            <div className="img">
                <img src={image} />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <h4>{brand}</h4>
                <h5>Rs {price}</h5>
            </div>
            <hr />
            <div className="description">{description}</div>
            <div className="cart-btn">
                <button className="cart-btn">Add to cart</button>
            </div>
        </Link>
    </div>
}

export default ProductCard;
