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

// const singleArticle = ()

  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route
            path="/:id"
            render={({ match }) => <Details articleId={match.params.id} />}
          />
      <Articles articles={articles} />

      </Switch>
    </div>
  );
}

export default App;
