import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/itemList.css";
import { getProducts } from '../../firebase';

const ItemsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='store-container-wrapper'>
                <div></div>
            <div className="store-container">
                <ul className="ul_itemslist">
                    {products.map((product) => (
                        <li key={product.id} className="li_itemslist">
                            <div>
                                <div>
                                    <img className="li_img_product" src={product.img} alt={product.desc} />
                                </div>
                                <div>
                                    <h3>{product.name}</h3>
                                </div>
                                <div>
                                    <h4>${product.price}</h4>
                                </div>
                            </div>
                            <div className='div_details_and_cart'>
                                    <Link to={`/ProjectGymReact/product/detail/${product.id}`} state={ product }>
                                        <div className='div_details'>
                                            <p className='p_details'>Ver detalle</p>
                                        </div>
                                    </Link>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
                <div></div>
        </div>
    )
}

export default ItemsList
