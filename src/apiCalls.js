const apiKey = process.env.REACT_APP_API_KEY

const fetchArticles = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
        .then(response => {
            if(!response.ok){
                throw new Error ('Oops, looks like ther was an error!')
            } else {
                return response.json()
            }
        })
        .catch(error => console.log(error))
}

export { fetchArticles } 