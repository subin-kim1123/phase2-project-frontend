import React, { Component } from 'react'
import { Card, Image, Button, Container } from 'semantic-ui-react'
import CardBack from './CardBack'
import CardFront from './CardFront'


export default class Recipe extends React.Component{

  state = {
    isFlipped: false
  }

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

  
  
    render(){
      if (this.state.flipped) {
      return(
        
         <CardBack
         recipeObj={this.props.recipeObj}
         handleClick={this.handleClick}
         editRecipe={this.props.editRecipe}
         deleteRecipe={this.delRecipe}/>
      )
      }
        else {
          return (
           <CardFront
           recipeObj={this.props.recipeObj}
           handleClick={this.handleClick}
           editRecipe={this.props.editRecipe}
           deleteRecipe={this.delRecipe}/>
          )
        }
    }
  }