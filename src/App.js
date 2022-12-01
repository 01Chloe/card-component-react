import React from 'react'
import './App.css'
import ThemeContextProvider from './Context/ThemeContext';
import Card from './Components/Card'

export default function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Card />
      </ThemeContextProvider>
    </div>
  );
}

