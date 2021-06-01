import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

export default class CardBack extends Component {
    render() {

        
        let { title, readyIn, servings, calories, ingredients, steps, blog, winePairing, source} = this.props.recipeObj
        return (
            <Card onClick={this.props.handleClick}>
            <Card.Header className="dish_name">{title}</Card.Header>
            
            <Card.Content>
                      
            <div className="dish_ingredients">
                <p className="dish_ingredient1">Ingredients: {ingredients.join(", ")}</p>
            </div>
            <div className="dish_instructions">
                <br></br>
                <p className="readyIn">Ready In: {readyIn}</p>
                <br></br>
                <p className="servings"> Servings: {servings}</p>
            </div>
            <p className="dish_calories">Calories: {calories}</p>
            <p className="blog">{blog}</p>
            <p className="instructions">Instructions: {steps.join(" ")}</p>
            <p className="winePairing">Wine Pairing: {winePairing}</p>
            <br></br>
            <p className="source">Source: {source}</p>
            </Card.Content>
            <Button onClick={this.delRecipe}>Delete</Button>
            </Card>
        )
    }
}
