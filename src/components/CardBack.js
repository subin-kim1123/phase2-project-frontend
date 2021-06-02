import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import EditForm from './EditForm'

export default class CardBack extends Component {
    state={
        showingDetail: false
    }

    handleClick = (event) => {
        this.setState({
            showingDetail: !this.state.showingDetail
    
        })
      }

    render() {

        
        let { title, readyIn, servings, calories, ingredients, steps, blog, winePairing, source} = this.props.recipeObj
        return (
            
            <Card >
            <Card.Header className="dish_name">{title}</Card.Header>
            
            { this.state.showingDetail===true ?
            
            <Card.Content >
                      
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
            
            </Card.Content> : <EditForm editRecipe={this.props.editRecipe} recipeObj={this.props.recipeObj}/>}
            <Button color='grey' >Go Back</Button>
            {/* <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button> */}
            </Card>
        )
    }
}
