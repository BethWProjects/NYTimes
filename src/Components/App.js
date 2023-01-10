// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import './App.css';
import Nav from './Nav'
import Articles from './Articles';
import Details from './Details';
import Filter from './Filter';


function App() {

  const [articles, setArticles] = useState([])
  const [filterArticles, setFilteredArticles] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchArticles('home')
    .then((response) => setArticles(response.results))
    .catch((error) => {
      setError(error)
    })
    setLoading(false)
  }, [])

  console.log('articles', articles)

  const filterAllArticles = (section) => {
    let filteredArticles = articles.filter(article => article.section === section)
    return filteredArticles
  }
  console.log(filterAllArticles('world'))
  

const singleArticle = (date) => {
  console.log('publised date', date)
  return articles.filter((article) => {
    return article.published_date === date
  })
}

  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route
            exact path="/:id"
            render={({ match }) => {
             const clickedArticle = singleArticle(match.params.id)
             return <Details article={clickedArticle} />
            }}  
          />
      <Route
        path='/'
        render={() => (
          <div className='article-filter-section'>
            <Filter />
            <Articles articles={articles} />
          </div>
        )}
      
      /> 

      </Switch>
    </div>
  );
}

export default App;
