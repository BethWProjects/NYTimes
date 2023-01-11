import React from "react"
import './Filter.css'
import { Link } from "react-router-dom"

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
           <Link to='/'>
                <button className="button-36" id="filter-button" onClick={fetchArticles()}>HOME</button>
           </Link>
        </div>
    )
}

export default Filter