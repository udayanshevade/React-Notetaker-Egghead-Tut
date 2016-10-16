import React from 'react';

class UserSearch extends React.Component {
  constructor(props) {
    super(props)
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
    //console.log(this);
    this.props.search(searchVal);
  }
  render() {
    return (
      <form name="search-form" className="search-form form-inline pull-xs-right" onSubmit={ this.handleSubmit }>
        <input id="user-search-input" className="form-control search-input" ref={ this.setRef } placeholder="Search username"/>
        <button className="btn btn-secondary btn-sm" type="submit">
          <i className="fa fa-user"></i>
        </button>
      </form>
    );
  }
}

UserSearch.contextTypes = {
  prop: React.PropTypes.bool
};

export default UserSearch;