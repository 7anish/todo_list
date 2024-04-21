import React from 'react'
import Header from './component/Header'
import "./component/style.css"
import Add from "./component/Add"

const App = () => {
  return (
    <div>
    <Header />
    <div className="hero-section">
    <Add />
    </div>
    </div>
  )
}

export default App
