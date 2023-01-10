// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { fetchArticles } from '../apiCalls';
import './App.css';
import Nav from './Nav'
import Articles from './Articles';


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
  return (
    <div className="App">
      <Nav />
      <Articles />
    </div>
  );
}

export default App;
