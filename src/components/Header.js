import React, { Component } from 'react'

export default class Header extends React.Component{


   
  addRandomRecipe = (event) => {
    const API_KEY = 
 
  fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`)
  .then((r) => r.json())
  .then((recipeObj) => this.props.addRecipeToState({
    title : recipeObj.recipes[0].title,
    readyIn : recipeObj.recipes[0].readyInMinutes,
    servings: recipeObj.recipes[0].servings,
    calories: recipeObj.recipes[0].pricePerServing,
    ingredients: recipeObj.recipes[0].extendedIngredients.map(obj => obj.name),
    steps : recipeObj.recipes[0].analyzedInstructions[0].steps.map(obj => obj.step),
    image : recipeObj.recipes[0].image,
    blog : recipeObj.recipes[0].summary,
    source : recipeObj.recipes[0].source
    }))
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
  

    
 
  