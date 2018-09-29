import React, { Component } from 'react'
import Navbar from './components/navbar'
import Wrapper from './components/wrapper'
import Image from './components/image'
import images from './images.json'
import './App.css';


class App extends Component {
  state = {
    images,
    count: 0,
    highscore: 0,
    gamestate: `Don't click the same image twice!`
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  imageLooper = (imageCards, clickTarget) => {
    let count = this.state.count;
    imageCards.forEach((image) => {
      if (image.id === clickTarget && !image.clicked) {
        let gameState = this.state.gamestate
        image.clicked = true
        count++;
        if (count === 12) {          
          gameState = `You Win!`
        } 
        this.setState({count: count, gamestate: gameState, images: this.shuffleArray(imageCards)});
      } /* else if (image.id === clickTarget && image.clicked) {
        imageCards.forEach((image) => {
          image.clicked = false
        })
        this.setState({
            highscore: this.state.count > this.state.highscore ? this.state.count : this.state.highscore,
            count: 0,
            gamestate: `You lose!`,
            images: this.shuffleArray(imageCards)
        })
        console.log(this.state)
      } */
    });
  }

  clickImage = (event) => {
    let clickTarget = parseInt(event.target.getAttributeNode('data-id').value, 10)
    this.imageLooper(this.state.images, clickTarget)
  }

  render() {
    return (
      <div>
        <Navbar count={this.state.count} highscore={this.state.highscore} gamestate={this.state.gamestate}></Navbar>
        <Wrapper>
          {this.state.images.map(image => (
            <Image
              clickImage={this.clickImage}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              clicked={image.clicked}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
