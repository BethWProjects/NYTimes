import React from "react"
import './Filter.css'
import { fetchArticles } from "../apiCalls"

const Filter = ({ filterAllArticles, articles }) => {
    // const categories = articles.map((article) => {
    //     return article
    // })
    const newCategories = [... new Set(articles)]
    const buttons = newCategories.map((singleCategory) => {
    return <button key={singleCategory} className="button-36" onClick={() => {filterAllArticles(singleCategory)}}>{singleCategory.toUpperCase()}</button>
})


    return (
        <div className="filter-container">
           {buttons}
              
           <a href='/'>
                <button className="button-36" onClick={() => {fetchArticles()}}>ALL STORIES</button>
           </a>
        </div>
    )
}

export default Filter