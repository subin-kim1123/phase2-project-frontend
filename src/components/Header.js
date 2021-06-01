import React, { Component } from 'react'

export default class Header extends React.Component{


   
  addRandomRecipe = (event) => {
    const API_KEY = 'c1f88f801b7843d3b41f2f0df1cd4538'
  fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`)
  .then((r) => r.json())
  .then((recipeObj) => console.log(recipeObj));
}
    render(){
      return(
        <div>
      <h1>The Joy Of Cooking Bart Simpson</h1>
      <button onClick={this.addRandomRecipe}>Add New Random Recipe!</button>
      </div>
      )
    }
  }