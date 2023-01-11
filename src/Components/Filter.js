import React from "react"
import './Filter.css'
import { fetchArticles } from "../apiCalls"

const Filter = ({ filterAllArticles, articles, fetchArticles }) => {
    const categories = articles.map((article) => {
        return article.section
    })
    const newCategories = [... new Set(categories)]
    const buttons = newCategories.map((singleCategory) => {
    return <button key={singleCategory} className="button-36" id="filter-button" onClick={() => {filterAllArticles(singleCategory)}}>{singleCategory.toUpperCase()}</button>
})


    return (
        <div className="filter-container">
           {buttons}
              
           <a href='/'>
                <button className="button-36" id="filter-button" onClick={() => fetchArticles()}>ALL STORIES</button>
           </a>
        </div>
    )
}

export default Filter