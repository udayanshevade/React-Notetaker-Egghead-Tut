import React from 'react';
import UserSearch from './UserSearch';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      searchError: false
    };
    this.newSearch = this.newSearch.bind(this);
    this.fn = this.fn.bind(this);
  }
  newSearch(val) {
    if (val) {
      this.setState({
        username: val
      }, () => {
        this.context.router.push('/profile/' + this.state.username);
      });
    }
  }
  fn() {
    console.log(this);
  }
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-dark bg-inverse">
          <a className="navbar-brand" href="">
            <i className="fa fa-home"></i>
            <h1 className="app-header-name">GitNote</h1>
          </a>
          <UserSearch search={ this.newSearch } />
        </nav>
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Main;