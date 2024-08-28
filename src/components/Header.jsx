import React from 'react'
import '../components/index.css'

const Header = () => {
  return (
    <div className='hrh'>
    <div className="bghed">
    <div className="conta">
      <div className='header'>
        <h1>Personal/Business</h1>
        <ul>
          <li>Sen money</li>
          <li>Converter</li>
          <li>Currency api</li>
          <li>Tools</li>
          <li>Resources</li>
        </ul>
        <h3>Sign in</h3>
        <button>Register</button>
      </div>
      </div>
    </div>
      <div className="main">
        <h1>150 EUR to USD - Convert Euros to US Dollars</h1>
        <h2>Xe Currency Converter</h2>
      </div>
    </div>
  )
}

export default Header