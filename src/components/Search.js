import React from 'react'

//search existing recipes

const Search = props => {


  let onChange = (event) => {
    props.handleChange(event.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
        onChange={onChange}
        value={props.searchBar}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

//    const API_KEY = 
///search for new recipe:
//https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10

export default Search