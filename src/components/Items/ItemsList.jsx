import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getDB } from '../db';

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
                                <p><Link to={`/product/detail/${product.id}`}>Ver detalles</Link></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ItemsList
