import React from 'react'
import './Details.css'

const Details = ({article}) => {
    console.log('article', article)
    console.log('article', article[0].title)
    
    return (
        <div className='details-component'>
            <img src={article[0].multimedia[1].url} className='details-image'></img>
            <h1 className='details-title'>{article[0].title}</h1>
            <p className='details-abstract'>{article[0].abstract}</p>
            <a href={article[0].url} target="_blank" className='button-35'>Full Article</a>
        </div>
    )
}

export default Details