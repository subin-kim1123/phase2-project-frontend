import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import RecipesContainer from './Recipe'
import Header from './Header'

export default class cookbook extends Component {
    state={
        recipes: []
    }

// componentDidMount(){
 //    fetch("http://localhost:3001/recipes")
 //    .then(res=>res.json())
 //    .then(recipesArr=>{
 //      this.setState({
 //        recipes: recipesArr
 //      })
 //    })
 //  }

    render() {
        let theArrayOfRecipes = this.state.recipes
        
        return (
            <div>
                <RecipeForm />
                <Header/>
                <RecipesContainer recipes={theArrayOfRecipes}/>
            </div>
        )
    }
}
