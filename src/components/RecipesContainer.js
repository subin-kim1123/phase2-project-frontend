import React, { Component } from 'react'
// import Recipe from './Recipe'
// import { Card } from 'semantic-ui-react'
import CardDetail from './CardDetail'
import RecipesList from './RecipesList'
import {  
    Switch, 
    Route
  } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class RecipesContainer extends React.Component { 

    render(){
    let renderRecipes = this.props.filterRecipes.map(recipeObj=>{
        return <RecipesList
        key={recipeObj.id}
        recipeObj={recipeObj}/>
    })
    return (
            <div>
                <Switch>
                 <Card.Group itemsPerRow={6}>
                 {renderRecipes} 
                  </Card.Group>  
                    
                    <Route path={`/recipe`}>
                        <CardDetail recipes={this.props.filterRecipes} />
                        </Route>
                </Switch>
            </div>
    )
    }
    
    }

    // <Route
    //                 path="/recipes"
                    
    //                 render={routerProps => ( <Card.Group itemsPerRow={6} renderRecipes 
    //                 {...routerProps} recipes={this.props.recipes} 
    //                 deleteRecipe={this.props.deleteRecipe}
    //                 filterRecipes={this.props.filterRecipes}/>)}
    //                 />

 

export default RecipesContainer