import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionInicio from './components/SectionInicio';
import ItemDetailProduct from './components/Items/ItemDetailProduct';
import ContextCartShopping from './components/ContextAPI/ContextCart/ContextCartShopping';
import CartSummary from './components/Checkout/CartSummary';
import CartCheckout from './components/Checkout/CartCheckout';


function App() {
  const user = {
    name: "Brandon",
    lastname: "Adata"
  };

  return (
    <BrowserRouter>
      <ContextCartShopping>
          <Header />
          <Routes>
            <Route path="/ProjectGymReact/" element={<SectionInicio userName={user.name} userLastname={user.lastname} />} />
            <Route path="/ProjectGymReact/product/detail/:id/" element={<ItemDetailProduct />} />
            <Route path="/ProjectGymReact/CartSummary" element={<CartSummary />} />
            <Route path="/ProjectGymReact/CartSummary/CartCheckout" element={<CartCheckout />} />

          </Routes>
          <Footer />
      </ContextCartShopping>
    </BrowserRouter>
  );
}

export default App