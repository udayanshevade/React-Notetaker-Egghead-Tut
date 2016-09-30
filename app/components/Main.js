var React = require('react');
var ReactDom = require('react-dom');

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('app'));