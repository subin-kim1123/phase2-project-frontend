import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditForm from './EditForm'


export default class CardFront extends Component {

      addLike = () => {
          this.props.recipeObj.likes +=1
          let data = {likes: this.props.recipeObj.likes}
    fetch(`https://mega-bytes-backend.herokuapp.com/recipes/${this.props.recipeObj.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      })
      .then((r) => r.json())
      .then((recipeObj) => this.props.updateLikesOnState(recipeObj));
  }

    
    render() {
        // console.log(this.state)
        let { title, image } = this.props.recipeObj
        return (
            <Card >
            <Card.Header className="dish_name" as='h3' size='huge'>{title} </Card.Header>
            <br></br>
            
          
            <Image className="recipe_image" onClick={this.props.handleClick} src={image} alt={title} wrapped ui={false}/>
            <br></br>
            <div className="ui labeled button" tabIndex="0" style={{flex:1,justifyContent: "center",alignItems: "center"}}>
          <div 
          className="ui pink button" onClick={this.addLike}>
            <i className="heart icon"></i> Add Likes
          </div>
          <a className="ui basic red left pointing label">
            {this.props.recipeObj.likes}
          </a>
          </div>
          <br></br>
            <Button color='olive' onClick={this.props.toggleEdit}>Edit</Button>
            {this.props.editButton ? <EditForm 
                editRecipe={this.props.editRecipe}
                recipeObj={this.props.recipeObj}/>  : null }
            <Button color='black' onClick={this.props.deleteRecipe}>Delete</Button>
            </Card>
        )
    }
}
