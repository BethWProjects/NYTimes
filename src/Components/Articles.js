import React from "react"
import './Articles.css'
import Card from "./Card"

 //filter over articles data and assign key value pairs to display on the Card component

const Articles = ({articles}) => {

    const articleData = articles.map((article) => {
        return(
            <Card 
                id={article.published_date}
                key={article.uri}
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