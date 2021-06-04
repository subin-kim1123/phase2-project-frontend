import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditForm from './EditForm'


export default class CardBack extends Component {
 

    toggleEdit = () => {
        let newBoolean = ! this.state.editButton
        this.setState({
            editButton : newBoolean
        })
    }
    render() {


        // <Button primary onClick={this.toggleForm}>Add your own recipe!</Button>
        //         <br/>
        //         {this.state.formView ? <RecipeForm 
        //         addRecipeToState={this.addRecipeToState}/>  : null }
        //         <br />
        
        let { title, readyIn, servings, calories, ingredients, steps, blog, winePairing, source} = this.props.recipeObj
        return (
            <Card >
            <Card.Header className="dish_name" as='h3' size='huge'>{title}</Card.Header>
            
            <Card.Content onClick={this.props.handleClick}
            style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                      
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
            <Button color='olive' onClick={this.props.toggleEdit}>Edit</Button>
            {this.props.editButton ? <EditForm 
                editRecipe={this.props.editRecipe}
                recipeObj={this.props.recipeObj}/>  : null }
            <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button>
            </Card>
        )
    }
}
