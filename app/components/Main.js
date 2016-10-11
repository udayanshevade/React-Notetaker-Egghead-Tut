var React = require('react');
var UserSearch = require('./UserSearch');

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-dark bg-inverse">
          <a className="navbar-brand" href="">
            Menu
          </a>
          <UserSearch/>
        </nav>
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );
  }
}

module.exports = Main;