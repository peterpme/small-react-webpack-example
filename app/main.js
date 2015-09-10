import Hello from './two'

const hi = React.createClass({
  getInitialState() {
    return {
      hi: 'hello'
    }
  },

  render() {
    return (
      <span>Hi</span>
      )
  }

})

export default hi
