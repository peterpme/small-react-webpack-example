import React from 'react';

const Input = React.createClass({
  mixins: [Formsy.Mixin],

  render() {
    return (
      <input
        type={this.props.type || 'text'}
      />
    )
  }

})
