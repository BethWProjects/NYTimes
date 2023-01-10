import React from 'react'
import './Details.css'

const Details = ({article}) => {
    console.log('article', article)
    console.log('article', article[0].title)
    
    return (
        <div className='details-component'>
            <img src={article[0].multimedia[1].url} className='details-image'></img>
            <h1 className='details-title'>{article[0].title}</h1>
        </div>
    )
}

export default Details