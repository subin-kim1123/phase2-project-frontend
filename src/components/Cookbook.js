import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import RecipesContainer from './RecipesContainer'
import Headline from './Headline'
import Search from './Search'
import { Button } from 'semantic-ui-react'

export default class cookbook extends Component {
    state={
        recipes: [],
        searchBar: '',
        formView : false,
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

//update state of recipes using spread operator and newRecipe
editRecipe = (updatedRecipe) => {
    let newRecipe = this.state.recipes.map((recipeObj)=>{
        if(recipeObj.id === updatedRecipe.id){
            return updatedRecipe
        } else {
            return recipeObj
        }
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
        this.setState({
            recipes: [...this.state.recipes, newRecipe]
        })
    }

    toggleForm = () => {
        this.setState({
            formView : !this.state.formView
        })
    }

    render() {
        console.log(this.state)

        let filterRecipes = this.state.recipes.filter(recipeObj => {
            return (recipeObj.title.toLowerCase().includes(this.state.searchBar))
          })
        
        return (
            <div>
                <Headline
                addRecipeToState={this.addRecipeToState}/>
                <br />
                Search Recipes:
                <Search 
                handleChange={this.handleChange}
                searchBar={this.state.searchBar}/>
                <br />
                <Button primary onClick={this.toggleForm}>Add your own recipe!</Button>
                {this.state.formView ? <RecipeForm 
                addRecipeToState={this.addRecipeToState}/>  : null }
                <br />
                <RecipesContainer 
                recipes={this.state.recipes}
                deleteRecipe={this.deleteRecipe}
                filterRecipes={filterRecipes}
                editRecipe={this.editRecipe}
                />
                <br />
                
        
            </div>
        )
    }
}
