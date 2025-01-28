import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionInicio from './components/SectionInicio';

function App() {
  const user = {
    name: "Brandon",
    lastname: "Adata"
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SectionInicio userName={user.name} userLastname={user.lastname} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
