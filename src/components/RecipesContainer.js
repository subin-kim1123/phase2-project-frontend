import React, { Component } from 'react'
// import Recipe from './Recipe'
// import { Card } from 'semantic-ui-react'
import CardDetail from './CardDetail'
import RecipeCardFront from './RecipeCardFront'
import {  
    Switch, 
    Route
  } from 'react-router-dom';

const RecipesContainer =(props, match) => (   
            <div>
                <Switch>
                    <Route
                    path={`${match.url}/:recipeId`}
                    render={routerProps => <RecipeCardFront  {...routerProps} recipes={props.recipes} 
                    deleteRecipe={props.deleteRecipe}
                    filterRecipes={props.filterRecipes}/>}
                    />
                    <Route path="/recipes">
                        <CardDetail recipes={props.filterRecipes} />
                        </Route>
                </Switch>
            </div>
         )

export default RecipesContainer