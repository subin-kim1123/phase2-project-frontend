import React, { Component } from "react";
import ModalContainer from "./ModalContainer";

import React from 'react'

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
    return (
      <ModalContainer
        props={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
