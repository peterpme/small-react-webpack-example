import React from 'react'

const SampleComponent = React.createClass({

  getInitialState() {
    return {
      count: 0
    }
  },

  handleClick(evt) {
    evt.preventDefault()
    this.setState({
      count: this.state.count + 1
    }, () => console.log('clicked state', this.state))
  },

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick}>
        Clicked {this.state.count} times
      </button>
    )
  }

})

export default SampleComponent

React.render(<SampleComponent />, document.getElementById('react-root'))
