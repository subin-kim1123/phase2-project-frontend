import React, { Component } from "react";
import { Form, Modal, Button } from "semantic-ui-react";

export default class RecipeForm extends Component {
  state = {
    title: "",
    readyIn: "",
    servings: "",
    calories: "",
    ingredients: "",
    steps: "",
    image: "",
    blog: "",
    winePairing: "",
    source: "",
  };

  state={ open: false }

  setOpen=(bool)=>{
      this.setState({open : bool})
  }

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
      ingredients: this.state.ingredients.split(","),
      steps: this.state.steps.split(","),
      image: [this.state.image],
      blog: this.state.blog,
      winePairing: this.state.winePairing,
      source: this.state.Source,
    };
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormattedObj),
    })
      .then((res) => res.json())
      .then((postedRecipeObj) => {
        this.props.addRecipeToState(postedRecipeObj);
        this.setState({
          title: "",
          readyIn: "",
          servings: "",
          calories: "",
          ingredients: "",
          steps: "",
          image: "",
          blog: "",
          winePairing: "",
          source: "",
        });
      });
  };

  render() {
    // console.log(this.state);
    return (
      <Modal
        onClose={() => this.setOpen(false)}
        onOpen={() => this.setOpen(true)}
        size="small"
        trigger={<Button>Add a new recipe</Button>}
      >
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="title"
                placeholder="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <Form.Input
                fluid
                label="readyIn"
                placeholder="readyIn"
                name="readyIn"
                onChange={this.handleChange}
                value={this.state.readyIn}
              />
              <Form.Input
                fluid
                label="servings"
                placeholder="Servings"
                name="servings"
                onChange={this.handleChange}
                value={this.state.servings}
              />
              <Form.Input
                fluid
                label="calories"
                placeholder="calories"
                name="calories"
                onChange={this.handleChange}
                value={this.state.calories}
              />
              <Form.Input
                fluid
                label="ingredients"
                placeholder="ingredients (separate with commas)"
                name="ingredients"
                onChange={this.handleChange}
                value={this.state.ingredients}
              />
              <Form.Input
                fluid
                label="steps"
                placeholder="steps (separate with commas)"
                name="steps"
                onChange={this.handleChange}
                value={this.state.steps}
              />
              <Form.Input
                fluid
                label="image"
                placeholder="url"
                name="image"
                onChange={this.handleChange}
                value={this.state.image}
              />
              <Form.Input
                fluid
                label="blog"
                placeholder="comment"
                name="blog"
                onChange={this.handleChange}
                value={this.state.blog}
              />
              <Form.Input
                fluid
                label="winePairing"
                placeholder="winePairing"
                name="winePairing"
                onChange={this.handleChange}
                value={this.state.winePairing}
              />
              <Form.Input
                fluid
                label="source"
                placeholder="url"
                name="source"
                onChange={this.handleChange}
                value={this.state.source}
              />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => this.setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
