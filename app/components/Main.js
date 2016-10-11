var React = require('react');

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="">
            Menu
          </a>
        </nav>
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );
  }
}

module.exports = Main;