// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { fetchArticles } from '../apiCalls';
import './App.css';
import Nav from './Nav'
import Articles from './Articles';
import Details from './Details';


function App() {

  const [articles, setArticles] = useState([])
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

  console.log(articles)

const singleArticle = (date) => {
  console.log('url', date)
  return articles.filter((article) => {
    return article.published_date === date
  })
}

  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route
            path="/:id"
            render={({ match }) => {
             const clickedArticle = singleArticle(match.params.id)
             return <Details article={clickedArticle} />
            }}  
          />
      <Route
        path='/'
        render={() => (
          <Articles articles={articles} />

        )}
      
      /> 

      </Switch>
    </div>
  );
}

export default App;
