import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionInicio from './components/SectionInicio';
import ItemDetailProduct from './components/Items/ItemDetailProduct';
import ContextCartShopping from './components/ContextAPI/ContextCartShopping';

function App() {
  const user = {
    name: "Brandon",
    lastname: "Adata"
  };

  return (
    <ContextCartShopping>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/ProjectGymReact/" element={<SectionInicio userName={user.name} userLastname={user.lastname} />} />
            <Route path="/ProjectGymReact/product/detail/:id/" element={<ItemDetailProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </ContextCartShopping>
  );
}

export default App;
