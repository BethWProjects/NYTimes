import React from "react"
import './Articles.css'
import Card from "./Card"

const Articles = ({articles}) => {

    const articleData = articles.map((article) => {
        return(
            <Card 
                id={article.short_url}
                key={article.short_url}
                image={article.multimedia[2].url}
                title={article.title}
            />
        )
    })
    return (
        <div className='cards'>{articleData}</div>
    )
}

export default Articles