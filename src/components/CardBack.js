import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

export default class CardBack extends Component {
    render() {

        
        let { title, readyIn, servings, calories, ingredients, steps, image, blog, winePairing, source} = this.props.recipeObj
        return (
            <Card onClick={this.props.handleClick}>
            <Card.Header className="dish_name">{title}</Card.Header>
            
            <Card.Content>
                      
            <div className="dish_ingredients">
                <p className="dish_ingredient1">{ingredients}</p>
                {/* <p className="dish_ingredient2">{}</p> */}
            </div>
            <div className="dish_instructions">
                <p className="readyIn">Ready In: {readyIn}</p>
                <p className="servings"> Servings: {servings}</p>
            </div>
            <p className="dish_calories">{calories}</p>
            <p className="blog">{blog}</p>
            <p className="wine-paring">{winePairing}</p>
            <p className="source">{source}</p>
            </Card.Content>
            <Button onClick={this.delRecipe}>Delete</Button>
            </Card>
        )
    }
}
