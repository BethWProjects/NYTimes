import React from 'react'
import './Details.css'

const Details = ({article}) => {
   let display;
   if(article) {
    display =  <div className='details-component'>
    <img src={article[0].multimedia[1].url} className='details-image'></img>
    <h1 className='details-title'>{article[0].title}</h1>
    <p className='details-byline'>{article[0].byline}</p>
    <p className='details-abstract'>{article[0].abstract}</p>
    <a href={article[0].url} target="_blank" className='button-35'>Full Article</a>
</div>
   } else {
    display = <h1>Oops!!!</h1>
   
   }

    return (
        <div className='details-component'>
            {display}
        </div>
    )
}

export default Details