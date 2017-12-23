import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: 'welcome to react'
    }
  }

  componentWillMount () {
    this.setState({
      welcome: this.props.message
    })

    // TODO: Get the dispatcher in place
  }

  render() {
    console.log('props: ', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.welcome}
          </h1>
        </header>
      </div>
    )
  }
}

export default App
