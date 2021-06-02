import React, { Component } from 'react'
import RecipesContainer from './RecipesContainer'
import Header from './Header'
import Search from './Search'
import RecipeForm from './RecipeForm'

export default class cookbook extends Component {
    state={
        recipes: [],
        searchBar: '',
 
    }

componentDidMount(){ 
    fetch(`http://localhost:3000/recipes`)
    .then((response)=> response.json())
    .then((data)=> {
        this.setState({
            recipes: data}) 
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

    handleChange = (event) => {
        this.setState({
          searchBar: event
        })
      }


    addRecipeToState = (newRecipe) => {
        let newRecipesArr = [...this.state.recipes, newRecipe]
        this.setState({
            recipes: newRecipesArr
        })
    }

    render() {
        console.log(this.state)

        let filterRecipes = this.state.recipes.filter(recipeObj => {
            return (recipeObj.title.toLowerCase().includes(this.state.searchBar))
          })
        
        return (
            <div>
                <Header/>
                <br />
                Search Recipes:
                <Search 
                handleChange={this.handleChange}
                searchBar={this.state.searchBar}/>
                <br />
                
                <RecipeForm 
                addRecipeToState={this.addRecipeToState}/>
                <br />

                <RecipesContainer 
                recipes={this.state.recipes}
                deleteRecipe={this.deleteRecipe}
                filterRecipes={filterRecipes}
                />
                <br />
                
        
            </div>
        )
    }
}
