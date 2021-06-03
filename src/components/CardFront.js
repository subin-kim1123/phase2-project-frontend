import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EditForm from './EditForm'

let styles={color: 'black', fontsize: '30px'}
export default class CardFront extends Component {

    state = {
        likes: 0
      }

      addLike = () => {
        this.setState({
          likes: this.state.likes + 1
        })
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
            {this.state.likes}
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
