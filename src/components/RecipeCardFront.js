import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

export default class RecipeCardFront extends Component {

    

    render(){
    
        console.log('hi')

        
        return (
            <div>
                <h1>Recipes</h1>
                {this.props.filterRecipes.map(recipeObj=>(
            
            <Card onClick={this.props.handleClick}>
            <Card.Header className="dish_name">{recipeObj.title}</Card.Header>
            <Image className="recipe_image" src={recipeObj.image} alt={recipeObj.title} wrapped ui={false}/>
            <Button color='olive'>Edit</Button>
            <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button>

            <Switch>
          <Route path={`/recipes/${recipeObj.id}`}>
            <Link to='/recipes'>Go Back</Link>
          </Route>
          <Route path='/recipes'>
            <Link to={`/recipes/${recipeObj.id}`}>
              View Recipe
            </Link>
          </Route>
        </Switch>
        </Card>
                ))
    }
        </div>
    
        )
    }
}
