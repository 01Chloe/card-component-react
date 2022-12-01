import React, {useContext} from 'react'
import './Image.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import { ThemeContext } from '../Context/ThemeContext'

export default function Image() {

     const {theme} = useContext(ThemeContext)

     return (
          <>
               <img src={theme ? img1 : img2} alt='landskape' />
          </>
     ) 
}