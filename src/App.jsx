import React from 'react'
import Strip from './components/strip'
import Header from './components/header'
import Filterbar from './components/Filterbar'
import Aside from './components/aside'
import Productlists from './components/Productlists'
import Footer from './components/footer'
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Strip />
      <Header />
      <Filterbar />
      <div className='container'>
      <Aside />
      <Productlists />
      </div>
      <Footer />
    </div>
  )
}

export default App
