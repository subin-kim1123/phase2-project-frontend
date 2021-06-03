import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditForm from './EditForm'


export default class CardFront extends Component {

   

    
    
    render() {
        // console.log(this.state)
        let { title, image } = this.props.recipeObj
        return (
            <Card >
            <Card.Header className="dish_name">{title}</Card.Header>
            <Image className="recipe_image" onClick={this.props.handleClick} src={image} alt={title} wrapped ui={false}/>
            <Button color='olive' onClick={this.props.toggleEdit}>Edit</Button>
            {this.props.editButton ? <EditForm 
                editRecipe={this.props.editRecipe}
                recipeObj={this.props.recipeObj}/>  : null }
            <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button>
            </Card>
        )
    }
}
