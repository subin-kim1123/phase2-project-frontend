import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

export default class RecipesList extends Component {

    

    render(){
    
        console.log('hi')

        
        return (
            <div>
              {/* <Switch> */}
            <Card itemsPerRow={4} onClick={this.props.handleClick}>
            <Card.Header className="dish_name">{this.props.recipeObj.title}</Card.Header>
            <Image className="recipe_image" src={this.props.recipeObj.image} alt={this.props.recipeObj.title} wrapped ui={false}/>
            <Button color='olive'>Edit</Button>
            <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button>
            <Link to={`/recipes/${this.props.recipeObj.id}`}
            </div>
            
          // <Route path={`/recipes/${this.props.recipeObj.id}`}>
          //   <Link to='/recipes'>Go Back</Link>
          // </Route>
          // <Route path='/recipes'>
          //   <Link to={`/recipes/${this.props.recipeObj.id}`}>
          //     View Recipe
          //   </Link>
          // </Route>
        // </Switch>
        
                
        
        )
        
    }
}
