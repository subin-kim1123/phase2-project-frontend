import React, { Component } from "react";

import { Card, Button, Form } from "semantic-ui-react";

export default class EditForm extends Component {
  state = {
    title: this.props.recipeObj.title,
    readyIn: this.props.recipeObj.readyIn,
    servings: this.props.recipeObj.servings,
    calories: this.props.recipeObj.calories,
    ingredients: this.props.recipeObj.ingredients,
    steps: this.props.recipeObj.steps,
    image: this.props.recipeObj.image,
    blog: this.props.recipeObj.blog,
    winePairing: this.props.recipeObj.winePairing,
    source: this.props.recipeObj.source,
    likes: 0,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newFormattedObj = {
      title: this.state.title,
      readyIn: parseInt(this.state.readyIn),
      servings: parseInt(this.state.servings),
      calories: parseInt(this.state.calories),
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      image: [this.state.image],
      blog: this.state.blog,
      winePairing: this.state.winePairing,
      source: this.state.Source,
      likes: this.state.likes,
    };
    let id = this.props.recipeObj.id;
    fetch(`https://mega-bytes-backend.herokuapp.com/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFormattedObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.props.editRecipe(data);
        window.location.reload();
      });
  };

  render() {
    console.log(this.state);

    let {
      title,
      readyIn,
      servings,
      calories,
      ingredients,
      steps,
      blog,
      image,
      winePairing,
      source,
    } = this.props.recipeObj;
    return (
      <div>
        <Card.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                label="title"
                placeholder={title}
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="readyIn"
                placeholder={readyIn}
                name="readyIn"
                onChange={this.handleChange}
                value={this.state.readyIn}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="servings"
                placeholder={servings}
                name="servings"
                onChange={this.handleChange}
                value={this.state.servings}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="calories"
                placeholder={calories}
                name="calories"
                onChange={this.handleChange}
                value={this.state.calories}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="ingredients"
                placeholder={[ingredients]}
                name="ingredients"
                onChange={this.handleChange}
                value={this.state.ingredients}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="steps"
                placeholder={[steps]}
                name="steps"
                onChange={this.handleChange}
                value={this.state.steps}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="image"
                placeholder={image}
                name="image"
                onChange={this.handleChange}
                value={this.state.image}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="blog"
                placeholder={blog}
                name="blog"
                onChange={this.handleChange}
                value={this.state.blog}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="winePairing"
                placeholder={winePairing}
                name="winePairing"
                onChange={this.handleChange}
                value={this.state.winePairing}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                label="source"
                placeholder={source}
                name="source"
                onChange={this.handleChange}
                value={this.state.source}
              />
            </Form.Group>

            <Form.Button color="blue">Submit</Form.Button>
            <br />
          </Form>
        </Card.Content>
        {/* <Button color='olive' onClick={this.props.editRecipe}>Edit</Button>
                <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button> */}
      </div>
      //     <Card onClick={this.props.handleClick}>
      //     <Card.Header className="dish_name">{title}</Card.Header>

      //     <Card.Content>

      //     <div className="dish_ingredients">
      //         <p className="dish_ingredient1">Ingredients: {ingredients.join(", ")}</p>
      //     </div>
      //     <div className="dish_instructions">
      //         <br></br>
      //         <p className="readyIn">Ready In: {readyIn}</p>
      //         <br></br>
      //         <p className="servings"> Servings: {servings}</p>
      //     </div>
      //     <p className="dish_calories">Calories: {calories}</p>
      //     <p className="blog">{blog}</p>
      //     <p className="instructions">Instructions: {steps.join(" ")}</p>
      //     <p className="winePairing">Wine Pairing: {winePairing}</p>
      //     <br></br>
      //     <p className="source">Source: {source}</p>
      //     </Card.Content>

      // </Card>
    );
  }
}
