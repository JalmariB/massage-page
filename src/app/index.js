
console.log('nddo?')
var React = require('react');
var ReactDOM = require('react-dom');

var CustomerForm = React.createClass({

  render: function (){
    return(
      <h1>Customer Form</h1>
    );
  }
});

ReactDOM.render(<CustomerForm/>, document.getElementById('form-container'));
