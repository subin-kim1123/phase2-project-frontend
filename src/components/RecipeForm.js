import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
export default class RecipeForm extends Component {
    state={
        title : "",
        ready_in : "",
        calories : "",
        Ingredients : "",
        steps: "",
        Image1 : "",
        Image2 : "",
        Blog : "",
        wine_pairing : "",
        Source : ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        let newFormattedObj ={
            title : this.state.title,
            ready_in : this.state.ready_in,
            calories: this.state.calories,
            Ingredients: this.state.Ingredients.split(', '),
            steps : this.state.steps.split(', '),
            Images : [this.state.Image1, this.state.Image2],
            Blog : this.state.Blog,
            wine_pairing : this.state.wine_pairing,
            Source : this.state.Source
        }
        fetch("http://localhost:3000/recipes", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newFormattedObj),
            })
            .then((res) => res.json())
            .then((postedRecipeObj) => {
                this.props.addRecipeToState(postedRecipeObj)
                this.setState({
                    title : "",
                    Recipe : "",
                    calories : "",
                    Ingredients : "",
                    steps: "",
                    Image1 : "",
                    Image2 : "",
                    Blog : "",
                    wine_pairing : "",
                    Source : ""
                })
            });
    }
    render() {   
        console.log(this.state)     
        return (
            <div>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Group widths="equal">
                    <Form.Input fluid label="title" placeholder="title" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <Form.Input fluid label="ready_in" placeholder="ready_in" name="ready_in" onChange={this.handleChange} value={this.state.ready_in} />
                    <Form.Input fluid label="calories" placeholder="calories" name="calories" onChange={this.handleChange} value={this.state.calories} />
                    <Form.Input fluid label="Ingredients" placeholder="Ingredients (separate with commas)" name="Ingredients" onChange={this.handleChange} value={this.state.Ingredients} />
                    <Form.Input fluid label="steps" placeholder="steps (separate with commas)" name="steps" onChange={this.handleChange} value={this.state.steps} />
                    <Form.Input fluid label="Image1" placeholder="url" name="Image1" onChange={this.handleChange} value={this.state.Image1} />
                    <Form.Input fluid label="Image2" placeholder="url" name="Image2" onChange={this.handleChange} value={this.state.Image2} />
                    <Form.Input fluid label="Blog" placeholder="Comment" name="Blog" onChange={this.handleChange} value={this.state.Blog} />
                    <Form.Input fluid label="wine_pairing" placeholder="wine pairing" name="wine_pairing" onChange={this.handleChange} value={this.state.wine_pairing} />
                    <Form.Input fluid label="Source" placeholder="url" name="Source" onChange={this.handleChange} value={this.state.Source}/>
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}