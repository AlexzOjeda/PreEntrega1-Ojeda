import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


  const App = () => {
      const greeting = "El Cafe de Ale"

  return (

    <>
      <NavBar />
      <ItemListContainer greeting={greeting}/>
      <h1>hola 1</h1>
      
    </>

  )
}

export default App
