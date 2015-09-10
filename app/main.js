import Hello from './two'
import Input from './components/base/input'

import "../styles/app.scss"

const hi = React.createClass({
  getInitialState() {
    return {
      hi: 'hello'
    }
  },

  render() {
    return (
      <div className="Modal">
        <div className="Modal-overlay"></div>
        <div className="Modal-inner">
        </div>
      </div>
    )
  }

})

export default hi
