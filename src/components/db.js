export const db = [];
const productsToShow = 30;

// esto fue generado por copilot de Bing, una chulada
const products = [
    // Proteínas (IDs 1-10)
    { id: 1, quantity: 0, stock: 14, price: 1299.00, type: "proteina", name: "Proteína Whey sabor Chocolate", desc: "La mejor proteína de la industria, con un delicioso sabor a chocolate. ¡Pruébala y nota la diferencia!", img:"/ProjectGymReact/img/proteina/proteina1.png" },
    { id: 2, quantity: 0, stock: 22, price: 1750.00, type: "proteina", name: "Proteína Isolada sabor Vainilla", desc: "Proteína aislada de alta pureza con sabor natural a vainilla. Ideal para tus entrenamientos.", img:"/ProjectGymReact/img/proteina/proteina2.webp" },
    { id: 3, quantity: 0, stock: 17, price: 1050.00, type: "proteina", name: "Proteína Vegana sabor Fresa", desc: "Proteína 100% vegetal con un toque de fresa fresca. Perfecta para dietas veganas.", img:"/ProjectGymReact/img/proteina/proteina3.png" },
    { id: 4, quantity: 0, stock: 29, price: 1899.00, type: "proteina", name: "Proteína Hidrolizada sabor Galleta", desc: "Absorción ultra rápida con el inigualable sabor a galleta. Maximiza tus resultados.", img:"/ProjectGymReact/img/proteina/proteina4.png" },
    { id: 5, quantity: 0, stock: 13, price: 999.00, type: "proteina", name: "Proteína Concentrada sabor Café", desc: "Energía y nutrición con sabor a café. Empieza tus mañanas con fuerza.", img:"/ProjectGymReact/img/proteina/proteina5.png" },
    { id: 6, quantity: 0, stock: 25, price: 1600.00, type: "proteina", name: "Proteína Caseína sabor Plátano", desc: "Liberación sostenida de proteínas con un dulce sabor a plátano. Ideal para antes de dormir.", desc:"", img:"/ProjectGymReact/img/proteina/proteina6.jfif" },
    { id: 7, quantity: 0, stock: 18, price: 1450.00, type: "proteina", name: "Proteína de Huevo sabor Natural", desc: "Proteína de albúmina de huevo, una excelente fuente de aminoácidos esenciales.", img:"/ProjectGymReact/img/proteina/proteina7.png" },
    { id: 8, quantity: 0, stock: 27, price: 1800.00, type: "proteina", name: "Proteína Multicomponente sabor Cookies and Cream", desc: "Combina diferentes tipos de proteína en una sola fórmula. Sabor irresistible.", img:"/ProjectGymReact/img/proteina/proteina8.jfif" },
    { id: 9, quantity: 0, stock: 11, price: 1100.00, type: "proteina", name: "Proteína Orgánica sabor Coco", desc: "Hecha con ingredientes orgánicos certificados y un exótico sabor a coco.", img:"/ProjectGymReact/img/proteina/proteina9.jfif" },
    { id: 10, quantity: 0, stock: 30, price: 1700.00, type: "proteina", name: "Proteína Sin Sabor", desc: "Proteína pura sin sabor, perfecta para mezclar con tus bebidas favoritas.", img:"/ProjectGymReact/img/proteina/proteina10.png" },

    // Creatinas (IDs 11-20)
    { id: 11, quantity: 0, stock: 16, price: 799.00, type: "creatina", name: "Creatina Monohidratada Pura", desc: "Incrementa tu fuerza y potencia con la creatina más pura del mercado.", img:"/ProjectGymReact/img/creatina/creatina1.jfif" },
    { id: 12, quantity: 0, stock: 24, price: 450.00, type: "creatina", name: "Creatina Micronizada sabor Sandía", desc: "Mejora tu rendimiento con un refrescante sabor a sandía.", img:"/ProjectGymReact/img/creatina/creatina2.jfif" },
    { id: 13, quantity: 0, stock: 19, price: 650.00, type: "creatina", name: "Creatina Alcalina", desc: "Fórmula avanzada para una absorción óptima y menos retención de líquidos.", img:"/ProjectGymReact/img/creatina/creatina3.jfif" },
    { id: 14, quantity: 0, stock: 12, price: 399.00, type: "creatina", name: "Creatina Líquida sabor Uva", desc: "Listo para tomar, sin necesidad de mezclar. Sabor a uva.", img:"/ProjectGymReact/img/creatina/creatina4.jfif" },
    { id: 15, quantity: 0, stock: 28, price: 899.00, type: "creatina", name: "Creatina Ethyl Ester", desc: "Mejora la biodisponibilidad y potencia tus entrenamientos.", img:"/ProjectGymReact/img/creatina/creatina5.jfif" },
    { id: 16, quantity: 0, stock: 15, price: 500.00, type: "creatina", name: "Creatina con Beta-Alanina", desc: "Combinación perfecta para retrasar la fatiga muscular.", img:"/ProjectGymReact/img/creatina/creatina6.jfif" },
    { id: 17, quantity: 0, stock: 26, price: 750.00, type: "creatina", name: "Creatina Kre-Alkalyn", desc: "Creatina tamponada para una mayor estabilidad y eficacia.", img:"/ProjectGymReact/img/creatina/creatina7.jfif" },
    { id: 18, quantity: 0, stock: 20, price: 850.00, type: "creatina", name: "Creatina HCI", desc: "Forma de creatina de alta solubilidad y absorción.", img:"/ProjectGymReact/img/creatina/creatina8.jfif" },
    { id: 19, quantity: 0, stock: 10, price: 620.00, type: "creatina", name: "Creatina Multi-Fase", desc: "Liberación progresiva para resultados continuos.", img:"/ProjectGymReact/img/creatina/creatina9.jfif" },
    { id: 20, quantity: 0, stock: 23, price: 799.00, type: "creatina", name: "Creatina sabor Limón", desc: "Energía pura con un toque cítrico. Ideal para tus batidos.", img:"/ProjectGymReact/img/creatina/creatina10.jfif" },

    // Suplementos (IDs 21-30)
    { id: 21, quantity: 0, stock: 14, price: 450.00, type: "suplementos", name: "BCAA 2:1:1 sabor Naranja", desc: "Aminoácidos esenciales para la recuperación muscular. Sabor naranja.", img:"/ProjectGymReact/img/suplementos/sup1.png" },
    { id: 22, quantity: 0, stock: 29, price: 399.00, type: "suplementos", name: "Glutamina en Polvo", desc: "Apoya tu sistema inmunológico y mejora la síntesis proteica.", img:"/ProjectGymReact/img/suplementos/sup2.png" },
    { id: 23, quantity: 0, stock: 17, price: 699.00, type: "suplementos", name: "Omega 3-6-9", desc: "Mejora tu salud cardiovascular con ácidos grasos esenciales.", img:"/ProjectGymReact/img/suplementos/sup3.png" },
    { id: 24, quantity: 0, stock: 21, price: 820.00, type: "suplementos", name: "Quemador de Grasa Natural", desc: "Fórmula termogénica para apoyar tu pérdida de peso.", img:"/ProjectGymReact/img/suplementos/sup4.webp" },
    { id: 25, quantity: 0, stock: 13, price: 550.00, type: "suplementos", name: "Complejo de Vitamina B", desc: "Aumenta tu energía y mejora el metabolismo.", img:"/ProjectGymReact/img/suplementos/sup5.png" },
    { id: 26, quantity: 0, stock: 27, price: 899.00, type: "suplementos", name: "Pre-Entrenamiento Extreme sabor Frutas", desc: "Máxima energía y enfoque para tus entrenamientos intensos.", img:"/ProjectGymReact/img/suplementos/sup6.jfif" },
    { id: 27, quantity: 0, stock: 18, price: 480.00, type: "suplementos", name: "Melatonina 5mg", desc: "Mejora tu calidad de sueño y recuperación nocturna.", img:"/ProjectGymReact/img/suplementos/sup7.png" },
    { id: 28, quantity: 0, stock: 25, price: 690.00, type: "suplementos", name: "Boost de Energía Natural", desc: "Suplemento a base de guaraná y ginseng para días activos.", img:"/ProjectGymReact/img/suplementos/sup8.jfif" },
    { id: 29, quantity: 0, stock: 16, price: 750.00, type: "suplementos", name: "Protector Articular", desc: "Cuidar tus articulaciones es clave. Contiene glucosamina y condroitina.", img:"/ProjectGymReact/img/suplementos/sup9.webp" },
    { id: 30, quantity: 0, stock: 22, price: 820.00, type: "suplementos", name: "Antioxidante con Resveratrol", desc: "Combate los radicales libres y mejora tu vitalidad.", img:"/ProjectGymReact/img/suplementos/sup10.png" }
];

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