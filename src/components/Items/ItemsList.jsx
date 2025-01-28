import React from 'react'
import { useState,useEffect } from 'react'

const db = [];

for (let index = 1; index < 9; index++) {
    const id = index;
    const name = 'Product ' + index;
    const img = "/src/assets/img/PNG/proteina1.png";
    db.push({id, name, img})
    
}
const getDB = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db)
        }, 2000)
        if(db.length === 0){
            reject('No products to show')
        }
    })
}

const ItemsList = () => {

    
    const [products, setProducts] = useState([]);

    const giveProducts = async () => {
        const database = await getDB()
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
                                <p><a href="/#">Ver detalles</a></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ItemsList
