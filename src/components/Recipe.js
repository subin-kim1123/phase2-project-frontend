import React, { Component } from 'react'

export default class Recipe extends React.Component{

  delRecipe = (e) => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`, {
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
        </div>
      )
    }
  }
        {/* <div className="recipe">
              <img className="recipe_image" src={} alt={}/>
              <div className="recipe_content">
                    <h2 className="dish_name">{}</h2>
                    <p className="dish_recipe">{}</p>
                    <div className="dish_ingredients">
                        <p className="dish_ingredient1">{}</p>
                        <p className="dish_ingredient2">{}</p>
                    </div>
                    <div className="dish_instructions">
                        <p className="dish_instruction1">{}</p>
                        <p className="dish_instruction2">{}</p>
                    </div>
                    <p className="dish_calories">{}</p>
                    <p className="blog">{}</p>
                    <p className="wine-paring">{}</p>
              </div>
              <br/>
                    <button>Edit</button>
                    <button onClick={this.delRecipe}>Delete</button>
        </div>
      
      )
    }
  }*/}