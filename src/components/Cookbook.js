import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import RecipesContainer from './Recipe'
import Header from './Header'

export default class cookbook extends Component {
    state={
        recipes: []
    }

     addRecipeToState = (newRecipe) => {
         let copyOfRecipeArr = [...this.state.recipes, newRecipe]
         this.setState({
           recipes: copyOfRecipeArr,
         })​}

    componentDidMount(){
    const API_KEY = ''
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
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
  

    render() {
        
        console.log(this.state)

        let theArrayOfRecipes = this.state.recipes
        
        return (
            <div>
                <Header/>
                <RecipeForm addRecipeToState={this.addRecipeToState}/>
                <RecipesContainer recipes={theArrayOfRecipes}/>
            </div>
        )
    }
}
