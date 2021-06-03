import React, { Component } from 'react'
// import { Card, Image, Button, Container } from 'semantic-ui-react'
import CardBack from './CardBack'
import CardFront from './CardFront'


export default class Recipe extends React.Component{

  state = {
    isFlipped: false,
    editButton: false
  }

  handleClick = (event) => {
    let newBoolean = ! this.state.flipped
    this.setState({
      flipped: newBoolean

    })
  }

  toggleEdit = (event) => {
    let newBoolean = ! this.state.editButton
    this.setState({
        editButton : newBoolean
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
      console.log(this.state)
      if (this.state.flipped) {
      return(
        
         <CardBack
         recipeObj={this.props.recipeObj}
         handleClick={this.handleClick}
         deleteRecipe={this.delRecipe}
         editRecipe={this.props.editRecipe}
         toggleEdit={this.toggleEdit}
         editButton={this.state.editButton}/>
      )
      }
        else {
          return (
           <CardFront
           recipeObj={this.props.recipeObj}
           handleClick={this.handleClick}
           deleteRecipe={this.delRecipe}
           editRecipe={this.props.editRecipe}
           toggleEdit={this.toggleEdit}
           editButton={this.state.editButton}
           updateLikesOnState={this.props.updateLikesOnState}/>
          )
        }
    }
  }
