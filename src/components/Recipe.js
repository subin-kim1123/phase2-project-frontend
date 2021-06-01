import React, { Component } from 'react'

export default class Recipe extends React.Component{

  delRecipe = (e) => {
    let id = 6
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(this.props.deleteRecipe)
    })  
    .then(res=>res.json())
    .then(data=>{
      this.props.deleteRecipe(data)  
    })
  }
  
    render(){
      console.log(this.props.recipeObj)

      let { title, readyIn, servings, calories, ingredients, steps, image, blog, winePairing, source} = this.props.recipeObj
      return(

    
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
      
      )
    }
  }