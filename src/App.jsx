import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {

  return (
    <>
      <div className="cabecalho">
        <h1>LogoTipo</h1>
        <FirstComponent />
      </div>
    </>
  )
}

export default App
