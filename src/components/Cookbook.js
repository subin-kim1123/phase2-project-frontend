import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import Recipe from './Recipe'
import Header from './Header'

export default class cookbook extends Component {
    state={
        recipes: []
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

    render() {
        return (
            <div>
                <RecipeForm/>
                <Header/>
                <Recipe/>
            </div>
        )
    }
}
