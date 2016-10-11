var React = require('react');
var UserProfile = require('./GitHub/UserProfile.js');
var Repos = require('./GitHub/Repos.js');
var Notes = require('./Notes/Notes.js');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
import GitHub from 'github-api';

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  loadGitHubBio: function(user) {
    var self = this;
    let gh = new GitHub();
    let ghUser = gh.getUser(user);

    ghUser.listRepos().then(function(data) {
      self.setState({
        repos: data.data
      });
    });

    ghUser.getProfile().then(function(data) {
      self.setState({
        bio: data.data
      });
    });

  },
  handleAddNote: function(newNote) {
    this.user.child(this.state.notes.length).set(newNote);
  },
  getInitialState: function() {
    // return state
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  initializeUser: function() {
    this.user = Firebase.database().ref(this.props.params.username);
    this.bindAsArray(this.user, 'notes');
    this.loadGitHubBio(this.props.params.username);
  },
  componentDidMount: function() {
    this.initializeUser();
  },
  componentWillReceiveProps: function() {
    this.unbind('notes');
    this.initializeUser();
  },
  render: function() {
    let uname = this.props.params.username;
    return (
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <UserProfile username={ uname } bio={ this.state.bio }/>
        </div>
        <div className="col-xs-12 col-md-5">
          <Repos username={ uname } repos={ this.state.repos } />
        </div>
        <div className="col-xs-12 col-md-4">
          <Notes username={ uname } addNote={ this.handleAddNote } notes={ this.state.notes } />
        </div>
      </div>
    );
  }
});

module.exports = Profile;