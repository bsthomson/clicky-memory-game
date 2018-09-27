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
    highscore: 0
  }

  componentDidUpdate(){
    console.log(this.state);
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

  // handleIncrement = () => {
  //   this.setState((state) => {
  //     return { count: this.state.count + 1 }
  //   })
  // }

  loseGame = () => {
    this.setState((state) => {
      this.state.images.forEach( image => {
        image.clicked = false
      })
      return { 
        highscore: this.state.count,
        count: 0,
        images
      }
    })
  }

  imageLooper = (imageCards, clickTarget) => {
    console.log(clickTarget);
    let count = this.state.count;
    imageCards.forEach((image, idx) => {
      if (image.id === clickTarget && !image.clicked) {
        image.clicked = true
        console.log(image.clicked)
        // this.handleIncrement()
        count++;
        // imageCards[idx] = Object.assign({}, image);
      }
    });

    this.setState({count: count, images: this.shuffleArray(imageCards)});
  }

  clickImage = (event) => {
    let clickTarget = parseInt(event.target.getAttributeNode('data-id').value, 10)
    this.imageLooper(this.state.images, clickTarget)
  }

  render() {
    return (
      <div>
        <Navbar count={this.state.count} highscore={this.state.highscore}></Navbar>
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
