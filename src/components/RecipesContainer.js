import React, { Component } from 'react'
import Recipe from './Recipe'
import { Card } from 'semantic-ui-react'

export default class RecipesContainer extends Component {
    render() {
        console.log('hi')
        console.log(this.props.recipes)
        let arrOfComponents = this.props.recipes.map(recipeObj=>{
            return <Recipe key={recipeObj.id} recipeObj={recipeObj} deleteRecipe={this.props.deleteRecipe} editRecipe={this.props.editRecipe}/>
        })
        return (
            <Card.Group itemsPerRow={4}>
                {arrOfComponents}
            </Card.Group>
         )
    
}
}