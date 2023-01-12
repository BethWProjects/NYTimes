import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'

// pass in props from Articles component to display on individual cards. 

const Card = ({image, title, id}) => {
    // console.log('id', id)
    return (
        <Link to={`/${id}`} className='card-id' aria-label={title}>
        <div className="card-container">
            <div className="card">
                <img className="article-image" src={image} alt={`This image is ${title}`} />
                <h2 className="article-title">{title}</h2>
            </div>
        </div>
        </Link>
    )
}

export default Card