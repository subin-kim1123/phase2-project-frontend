import React, { Component } from 'react'

export default class Recipe extends React.Component{

  delRecipe = (e) => {
    fetch("http://localhost:3000/recipes", {
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
      return(
      <div>
        <div className="recipe">
              <img className="recipe_image" src={this.props.recipeObj.Image} alt={this.props.recipeObj.title}/>
              <div className="recipe_content">
                    <h2 className="dish_name">{this.props.recipeObj.title}</h2>
                    <p className="dish_cookTime">{this.props.recipeObj["ready in"]}</p>
                    <div className="dish_ingredients">
                        <p className="dish_ingredient1">{this.props.recipeObj.Ingredients}</p>
                        {/* <p className="dish_ingredient2">{}</p> */}
                    </div>
                    <div className="dish_instructions">
                        <p className="dish_instruction1">{this.props.recipeObj.steps}</p>
                        {/* <p className="dish_instruction2">{}</p> */}
                    </div>
                    <p className="dish_calories">{this.props.recipeObj.calories}</p>
                    <p className="dish_serving">{this.props.recipeObj.servings}</p>
                    <p className="blog">{this.props.recipeObj.Blog}</p>
                    <p className="wine-paring">{this.props.recipeObj["wine pairing"]}</p>
                    <p className="source">{this.props.recipeObj.Source}</p>
              </div>
              <br/>
                    <button>Edit</button>
                    <button onClick={this.delRecipe}>Delete</button>
        </div>
      </div>
      )
    }
  }