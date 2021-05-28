import React from 'react'
import Header from './Header'
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'


export default class Cookbook extends React.Component{
  state={
    cook : []
  }
 // componentDidMount(){
 //    fetch("http://localhost:3001/recipes")
 //    .then(res=>res.json())
 //    .then(recipesArr=>{
 //      this.setState({
 //        pokemon: pokemonArr
 //      })
 //    })
 //  }
  render(){
    return(
    <div>
    <Header />
    <Recipe />
    <RecipeForm />
    <div/>

    )
  }
