import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import './Card.css'
import BtnToggle from './BtnToggle'
import Image from './Image'

export default function Card() {

     const {theme} = useContext(ThemeContext)

     return (
          <div className={theme ? 'container dark' : 'container light'}>
          <div className={theme ? 'card dark' : 'card light'}>
          <div className='card-component' >
               <h1>Get <span className={theme ? 'span purple' : 'span yellow'}> insights</span> that help your business grow.</h1>
               <p className='para'>Discover the benefits of data analytics and make better decisions regarding revenue, curstomer experience, and overwall efficiency.</p>
               <div className='group-stats'>
                    <div className='stats'>
                         <h2>10K+</h2>
                         <p className='name-stats'>Companies</p>
                    </div>
                    <div className='stats'>
                         <h2>314</h2>
                         <p className='name-stats'>Templates</p>
                    </div>
                    <div className='stats'>
                         <h2>12M+</h2>
                         <p className='name-stats'>Queries</p>
                    </div>
               </div>
               <BtnToggle />
          </div>
               <Image />
          </div>
          </div>
     )
}
