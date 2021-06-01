import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class Recipe extends React.Component{

  delRecipe = (e) => {
    let id = this.props.recipeObj.id
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })  
    .then(res=>res.json())
    .then(data=>{
      this.props.deleteRecipe(id)  
    })
  }
  
    render(){
      // console.log(this.props.recipeObj)

      let { title, readyIn, servings, calories, ingredients, steps, image, blog, winePairing, source} = this.props.recipeObj
      return(

        <Container>
        <div className="recipe">
              <img className="recipe_image" src={image} alt={title}/>
              <div className="recipe_content"> 
                    <h2 className="dish_name">{title}</h2>
                    <p className="dish_recipe">{steps}</p>
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
              </div>
              <br/>
                    <button>Edit</button>
                    <button onClick={this.delRecipe}>Delete</button>
        </div>
        </Container>
      )
    }
  }