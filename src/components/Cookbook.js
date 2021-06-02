import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import RecipesContainer from './RecipesContainer'
import Header from './Header'
import Search from './Search'
import { Button } from 'semantic-ui-react'
import {
    Route,
    Switch,
    Link
  } from 'react-router-dom';

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
                <Header
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
                <Link to='/recipes'>See Recipes</Link>
                <Switch>
                    <Route
                    path="/recipes"
                    render={routerProps =><RecipesContainer {...routerProps} 
                    recipes={this.state.recipes}
                    deleteRecipe={this.deleteRecipe}
                    filterRecipes={filterRecipes}/>}
                />
                </Switch>
            </div>
        )
    }
}
