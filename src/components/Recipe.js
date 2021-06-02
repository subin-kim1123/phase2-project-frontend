import React, { Component } from 'react'
import { Card, Image, Button, Container } from 'semantic-ui-react'

import RecipeCardFront from './RecipesList'


export default class Recipe extends React.Component{

 
  handleClick = (event) => {
    let newBoolean = ! this.state.flipped
    this.setState({
      flipped: newBoolean

    })
  }

  
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

  // editRecipe = (e) => {
  //   let id = this.props.recipeObj.id
  // fetch(`http://localhost:3000/recipes/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({

  //   }),
  // })
  //   .then((r) => r.json())
  //   .then((articleObj) => console.log(articleObj));
  
  // }

 
    render(){
      let arrOfComponents = this.props.filterRecipes.map(recipeObj=>{
        return <RecipeCardFront key={recipeObj.id} recipeObj={recipeObj} deleteRecipe={this.props.deleteRecipe}/>
      })
      return (
        <div>
          {arrOfComponents}
        </div>
      )
      
      
  }
}


//   return(

//     state = {
//       isFlipped: false
//     }
  
//     if (this.state.flipped) {
//     <CardBack
//     recipeObj={this.props.recipeObj}
//     handleClick={this.handleClick}
//     deleteRecipe={this.delRecipe}/>
//  )
//  }
//    else {
//      return (
//       <CardFront
//       recipeObj={this.props.recipeObj}
//       handleClick={this.handleClick}
//       deleteRecipe={this.delRecipe}/>
//      )
//    }
// 