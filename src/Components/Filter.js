import React from "react"
import './Filter.css'

const Filter = ({ filterAllArticles }) => {
    return (
        <div className="filter-container">
            <button className="button-36" id="filter-button" onClick={() => {filterAllArticles('arts')}}>ARTS</button>
            <button className="button-36" id="filter-button">BOOKS</button>
            <button className="button-36" id="filter-button">BUSINESS</button>
            <button className="button-36" id="filter-button">CLIMATE</button>
            <button className="button-36" id="filter-button">CROSSWORDS</button>
            <button className="button-36" id="filter-button">ESPANOL</button>
            <button className="button-36" id="filter-button">MAGAZINE</button>
            <button className="button-36" id="filter-button">MOVIES</button>
            <button className="button-36" id="filter-button">NYREGION</button>
            <button className="button-36" id="filter-button">OPINION</button>
            <button className="button-36" id="filter-button">SPORTS</button>
            <button className="button-36" id="filter-button">TECHNOLOGY</button>
            <button className="button-36" id="filter-button" onClick={() => {filterAllArticles('us')}}>US</button>
            <button className="button-36" id="filter-button" onClick={() => {filterAllArticles('well')}}>WELL</button>
            <button className="button-36" id="filter-button" onClick={() => {filterAllArticles('world')}}>WORLD</button>
        </div>
    )
}

export default Filter