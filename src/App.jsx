import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import { Fotter } from './components/Fotter'

function App() {

  return (
    <>
      <Navbar/>
      <div className='min-h-[75vh] w-full'>
      <Manager/>
      </div>
      <Fotter/>
    </>
  )
}

export default App
