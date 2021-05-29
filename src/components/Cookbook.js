import React, { Component } from 'react'
import RecipeForm from './RecipeForm'
import Recipe from './Recipe'
import Header from './Header'

export default class cookbook extends Component {
    state={
        recipes: []
    }

   

// componentDidMount(){
//     fetch()
//     .then(res=>res.json())
//     .then(recipesArr=>{
//       this.setState({
//         pokemon: recipesArr
//       })
//     })

 

componentDidMount(){
   const API_KEY = ''
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
    .then((response)=> response.json())
    .then((data)=> {
        this.setState({
            recipes: data
        })
    })
    .catch(()=>{
        console.log("error")
    })
}
  

    render() {
        
        console.log(this.state)

        // const unirest = require("unirest");

        // const req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random");
        
        // req.query({
        //     "number": "10"
        // });
        // req.headers({
        //     "x-rapidapi-key": "602673fc04mshc0c965081b623ddp1b0ef4jsn4c5bcbd73d3d",
        //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        //     "useQueryString": true
        // });
        // req.end(function (res) {
        //     if (res.error) throw new Error(res.error);
        //     console.log(res.body);
        // });

        // const unirest = require('unirest')

        // const API_KEY = "602673fc04mshc0c965081b623ddp1b0ef4jsn4c5bcbd73d3d"

        // let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random"

        // unirest.get(requestString)
        // .header("X-RapidAPI-Key", API_KEY)
        // .end(function(result) {
        //     if (result.status === 200) {
        //         console.log(result.body)
        //     }
        // })
    
        return (
            <div>
                {this.getRecipeData}
                <RecipeForm/>
                <Header/>
                <Recipe/>
            </div>
        )
    }
}
