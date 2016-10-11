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
    console.log(user);
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
      console.log(self.state.bio);
    });

  },
  getInitialState: function() {
    // return state
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function() {
    this.user = Firebase.database().ref(this.props.params.username);
    this.bindAsArray(this.user, 'notes');
    console.log(this.state.notes);

    this.loadGitHubBio(this.props.params.username);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-xs-12 col-md-5">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-xs-12 col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;