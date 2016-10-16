import React from 'react';

class UserSearch extends React.Component {
  constructor() {
    super()
    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setRef(ref) {
    this.usernameToSearch = ref;
  }
  handleSubmit(event) {
    event.preventDefault();
    const searchVal = this.usernameToSearch.value;
    this.usernameToSearch.value = '';
    if (searchVal) {
      this.context.router.push('/profile/' + searchVal);
    }
  }
  render() {
    return (
      <form name="search-form" className="search-form form-inline pull-xs-right" onSubmit={ this.handleSubmit }>
        <input id="user-search-input" className="form-control search-input" ref={ this.setRef } placeholder="Search username"/>
        <button className="btn btn-outline-success btn-sm" type="submit">
          <i className="fa fa-user"></i>
        </button>
      </form>
    );
  }
}

UserSearch.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserSearch;