import React, { Component } from 'react'

export default class Recipe extends React.Component{
    render(){
        let arrOfComponents = props.recipes.map(recipeObj=>{
            return <Recipe key={recipeObj.id} recipeObj={recipeObj}/>
        })
      return(
      <div>
      <button>Edit</button>
      <button>Delete</button>
      </div>
      )
    }
  }