var React = require('react');
var Router = require('react-router');

var UserSearch = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  setRef: function(ref) {
    this.usernameToSearch = ref;
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var searchVal = this.usernameToSearch.value;
    this.usernameToSearch.value = '';
    this.context.router.push('/profile/' + searchVal);
  },
  render: function() {
    return (
      <form name="search-form" className="form-inline pull-xs-right" onSubmit={ this.handleSubmit }>
        <input id="user-search-input" className="form-control" ref={ this.setRef } placeholder="Find someone"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    );
  }
});

module.exports = UserSearch;