import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({image, title, id}) => {
    return (
        <Link to={`/${id}`} className='card-id' aria-label={title}>
        <div className="card-container">
            <div className="card">
                <img className="article-image" src={image} alt='image of article' />
                <h2 className="article-title">{title}</h2>
            </div>
        </div>
        </Link>
    )
}

export default Card