import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getDB } from '../db';
import "../../styles/itemList.css";

const ItemsList = () => {
    const [products, setProducts] = useState([]);
    const giveProducts = async () => {
        const database = await getDB();
        setProducts(database);
    }

    useEffect(() => {
        giveProducts()
    }, []);

    return (
        <div className='store-container-wrapper'>
                <div></div>
            <div className="store-container">
                <ul className="ul_itemslist">
                    {products.map((product) => (
                        <li key={product.id} className="li_itemslist">
                            <div>
                                <img className="li_img_product" src={product.img} alt={product.desc} />
                            </div>
                            <div>
                                <h3>{product.name}</h3>
                            </div>
                            <div>
                                <h4>${product.precio}</h4>
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
