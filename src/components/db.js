export const db = [];
const productsToShow = 30;

for (let index = 0; index < productsToShow; index++) {
    const id = index + 1;
    const name = 'Product ' + id;
    const img = "/ProjectGymReact/img/proteina2.webp";
    const precio = Math.floor(Math.random() * (1500 - 300 + 1)) + 300;
    const precioFormateado = precio.toLocaleString('es-MX');
    const desc = "Producto de alta calidad...";
    db.push({id, name, img, precio: precioFormateado, desc})
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