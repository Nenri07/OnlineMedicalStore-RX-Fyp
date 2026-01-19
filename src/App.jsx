import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div>This is the card of libarty and th font has to be sf pro</div>

    </>
  )
}

export default App
