import React, { Component } from 'react'
import Recipe from './Recipe'

export default class RecipesContainer extends Component {
    render() {
        let arrOfComponents = this.props.recipes.map(recipeObj=>{
            return <Recipe key={recipeObj.id} recipeObj={recipeObj} deleteRecipe={this.props.deleteRecipe}/>
        })
        return (
            <div>
                {arrOfComponents}
            </div>
        )
    }
}
