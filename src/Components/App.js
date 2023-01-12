import React, {useState, useEffect} from 'react';
import { Switch, Route} from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import './App.css';
import Nav from './Nav'
import Articles from './Articles';
import Details from './Details';
import Filter from './Filter';


function App() {

  const [articles, setArticles] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filteredCategory, setFilteredCategory] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  // console.log('testing', filtered)

  useEffect(() => {
    fetchArticles()
    .then((response) => {
      findSections(response.results)
      setArticles(response.results)})
    .catch((error) => {
      setError(error)
    })
    setLoading(false)
  }, [])

  const findSections = (data) => {
    const sections = data.map((news) => news.section)
    setFiltered(sections)
  }

  console.log('articles', articles)

  const filterAllArticles = (data) => {
    //console.log('this is data', data)
    let filteredArticles = articles.filter(article => article.section === data)
    setFilteredCategory(filteredArticles)
  }
console.log('filteredCategory', filteredCategory)

const singleArticle = (date) => {
  console.log('date', date)
  console.log('articles', articles)
  return articles.filter((article) => {
    return article.published_date === date
  })
}

  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route
        exact path='/'
        render={() => (
          <div className='article-filter-section'>
            <Filter  articles={filtered} filterAllArticles={filterAllArticles} />
            <Articles articles={articles} filteredCategory={filteredCategory}/>
          </div>
        )}
      /> 
      <Route
            exact path="/:id"
            render={({ match }) => {
             const clickedArticle = singleArticle(match.params.id)
             return <Details article={clickedArticle} />
            }}  
          />

      </Switch>
    </div>
  );
}

export default App;
