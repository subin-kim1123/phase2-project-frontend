import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import RecipesContainer from './RecipesContainer'
import Header from './Header'

export default class Cookbook extends Component {
    state={
        recipes: []
    }

componentDidMount(){
   
    fetch("http://localhost:3000/recipes")
    .then((response)=> response.json())
    .then((data)=> {
        this.setState({
            recipes: data
        })
    })
    .catch(()=>{
        console.log("error")
    })
}
  
    deleteRecipe = (deleteID) => {
        let newArr = this.state.recipes.filter(recipeObj => {
            return recipeObj.id !== deleteID
        })
        this.setState({
            recipes: newArr
        })
    }

    render() {
        console.log(this.state)

        let theArrayOfRecipes = this.state.recipes
        
        return (
            <div>
                <RecipeForm />
                <Header/>
                <RecipesContainer 
                recipes={theArrayOfRecipes}
                deleteRecipe={this.deleteRecipe}
                />
            </div>
        )
    }
}