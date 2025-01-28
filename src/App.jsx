import React from 'react'
import { Header } from './components/Header.JSX'
import { Footer } from './components/Footer'
import { SectionInicio } from './components/SectionInicio'

function App() {
  const user = {
    name: "Brandon",
    lastname: "Adata"

  }
  return (
    <div>
      <Header />
      <SectionInicio userName = {user.name} userLastname = {user.lastname} />
      <Footer/>
    </div>
  )
}

export default App
