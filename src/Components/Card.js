import React from 'react'
import './Card.css'

export default function Card() {
     return (
          <div className='card-component'>
               <h1>Get <span> insights</span> that help your business grow.</h1>
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
          </div>
     )
}
