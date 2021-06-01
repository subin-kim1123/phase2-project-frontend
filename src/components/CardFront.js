import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default class CardFront extends Component {

    
    render() {
        let { title, image } = this.props.recipeObj
        return (
            <Card onClick={this.props.handleClick}>
            <Card.Header className="dish_name">{title}</Card.Header>
            <Image className="recipe_image" src={image} alt={title} wrapped ui={false}/>
            <Button>Edit</Button>
            <Button onClick={this.delRecipe}>Delete</Button>
            </Card>
        )
    }
}