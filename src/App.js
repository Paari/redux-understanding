import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'welcome to react'
    }
  }

  componentWillMount () {
    this.setState(this.props.fetchStore())
  }

  render() {
    console.log('props: ', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.message}
          </h1>
        </header>
      </div>
    )
  }
}

export default App
