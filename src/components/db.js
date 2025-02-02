const db = [];

for (let index = 1; index < 9; index++) {
    const id = index;
    const name = 'Product ' + index;
    const img = "/proteina2.webp";
    const desc = "Producto de alta calidad...";
    db.push({id, name, img, desc})
    
}
export const getDB = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db)
        }, 1000)
        if(db.length === 0){
            reject('No products to show')
        }
    })
}

export default getDB;