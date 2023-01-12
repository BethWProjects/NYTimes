import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
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

  useEffect(() => {
    fetchArticles()
    .then((response) => {
      const newId = response.results.map((result, index) => ({
        ...result,
        id: index++,
      }))
      findSections(response.results)
      setArticles(newId)})
    .catch((error) => {
      setError(error)
    })
    setLoading(false)
  }, [])

  const findSections = (data) => {
    const sections = data.map((news) => news.section)
    setFiltered(sections)
  }

  const filterAllArticles = (data) => {
    let filteredArticles = articles.filter(article => article.section === data)
    setFilteredCategory(filteredArticles)
  }

const singleArticle = (id) => {
  let newId = parseInt(id)
  return articles.filter((article) => {
    return article.id === newId
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
             singleArticle(match.params.id)
             return <Details article={singleArticle(match.params.id)} />
            }}  
          />

      </Switch>
    </div>
  );
}

export default App;
