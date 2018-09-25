import React, { Component } from 'react'
import Navbar from './components/navbar'
import Wrapper from './components/wrapper'
import Image from './components/image'
import images from './images.json'
import './App.css';


class App extends Component {
  state = {
    images,
    count: 0
  }

  clickImage = () => {
    let btnType = this.state.images.clicked
    const newState = { ...this.state }

    if (!btnType) {
      btnType = true
      this.handleIncrement()
      console.log(images)
    }

    this.shuffleArray(newState.images)

    this.setState({ newState })
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  handleIncrement = () => {
    this.setState((state) => {
      return { count: this.state.count + 1}
    })
  }

  render() {
    return (
      <div>
        <Navbar count={this.state.count}></Navbar>
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
