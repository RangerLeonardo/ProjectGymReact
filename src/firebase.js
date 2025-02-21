import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection, doc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCctttVWGUc5IBnmkH8U1kLGmSG1z-CpA0",
    authDomain: "ecommerce-suplementos-78176.firebaseapp.com",
    projectId: "ecommerce-suplementos-78176",
    storageBucket: "ecommerce-suplementos-78176.firebasestorage.app",
    messagingSenderId: "908532172304",
    appId: "1:908532172304:web:15b22e3cbdd8aa1f00ac95",
    measurementId: "G-L9HTD6TPZJ"
};

/*const pushProducts = async () =>{
    const batch = writeBatch(db);
    const productsRef = collection(db, "products");

    products.forEach(product => {
        const newDoc = doc(productsRef);
        batch.set(newDoc, product);
    });

    try{
        await batch.commit();
        console.log("Productos agregados correctamente");
    }catch(error){
        console.error("Error al agregar productos", error);
    }
}

//esta function fue usada en App.jsx para hacer el push de products, ya está en db así que ya no se requiere
export default function executePushProducts(){
    pushProducts();
}*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc => doc.data());
    return products;
}

export const postUser = async (formData) => {
    const batch = writeBatch(db);
    // Extrae los datos del formulario
    const { name, last_name, email, password, addressToRef } = formData;
    const { street, colonia } = addressToRef;

    // Crea referencias para los documentos
    const userRef = doc(collection(db, 'users'));
    const addressRef = doc(collection(db, 'address'));

    // Datos para guardar
    const userData = {
        name,
        last_name,
        email,
        password,
        addressRef,
    };

    const addressData = {
        street,
        colonia,
    };

    // Agrega las operaciones al batch
    batch.set(userRef, userData);
    batch.set(addressRef, addressData);

    try {
        await batch.commit();
        console.log("Usuario creado correctamente");
    } catch (error) {
        console.error("Error al crear usuario", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
};

export async function getUserToLogin (email, password) {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map(doc => doc.data());
    const user = users.find(user => user.email === email && user.password === password);
    return user;
}

const defaultMessage = "Db"
export default defaultMessage;
