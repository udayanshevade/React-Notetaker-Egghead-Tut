import React from 'react';
import UserProfile from './User/UserProfile.js';
import Repos from './GitHub/Repos.js';
import Notes from './Notes/Notes.js';
import Firebase from 'firebase';
import Rebase from 're-base';
import GitHub from 'github-api';
import SearchError from './SearchError.js';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBpBxfNCtzsS9fC5lit7PtmkzGWjRyJOJY",
  authDomain: "first-react-app-a76ec.firebaseapp.com",
  databaseURL: "https://first-react-app-a76ec.firebaseio.com",
  storageBucket: "first-react-app-a76ec.appspot.com",
  messagingSenderId: "763887315114"
};

const base = Rebase.createClass(config);

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: [],
      searchError: false
    };
    this.initializeUser = this.initializeUser.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.loadGitHub = this.loadGitHub.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
    this.loadRepos = this.loadRepos.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.resetSearchError = this.resetSearchError.bind(this);
  }
  loadGitHub(newName) {
    const self = this;
    const gh = new GitHub();
    const ghUser = gh.getUser(newName);
    return this.loadProfile(ghUser, this.currentName).then(() => {
      this.loadRepos(ghUser);
    });
  }
  loadProfile(ghUser) {
    return ghUser.getProfile()
    .then((data) => {
      this.setState({
        bio: data.data
      });
    }).catch((err) => {
      this.setState({
        searchError: true
      });
    });
  }
  loadRepos(ghUser) {
    return ghUser.listRepos().then((data) => {
      this.setState({
        repos: data.data
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  initializeUser(newName) {
    this.loadGitHub(newName)
    .then(() => {
      if (this.endpoint !== newName) {
        if (this.user) {
          base.removeBinding(this.user);
        }
        this.user = base.bindToState(newName, {
          context: this,
          AsArray: true,
          state: 'notes'
        });
      }
    });
  }
  changeUser(newName) {
    this.initializeUser(newName, this.currentName);
  }
  resetSearchError() {
    this.setState({
      searchError: false
    });
    if (this.currentName) {
      this.context.router.push('/profile/' + this.currentName);
    } else {
      this.context.router.push('/');
    }
  }
  componentWillMount() {
    this.changeUser(this.props.params.username);
  }
  componentWillReceiveProps(nextProps) {
    const newName = nextProps.params.username;
    this.currentName = this.props.params.username;
    this.changeUser(newName);
  }
  render() {
    const uname = this.props.params.username;
    const repos = (this.state.repos.length) ? this.state.repos : [];
    const notes = (this.state.notes.length) ? this.state.notes : [];
    return (
      <div className="row">
        <div className="col-xs-12 profile-col">
          <UserProfile username={ uname } bio={ this.state.bio }/>
        </div>
        <div className="col-xs-12 repos-notes-col">
          <div className="row">
            <div className="col-xs-12 col-lg-6 repos-col">
              <Repos username={ uname } repos={ repos } />
            </div>
            <div className="col-xs-12 col-lg-6 notes-col">
              <Notes username={ uname } addNote={ this.handleAddNote } notes={ notes } />
            </div>
          </div>
        </div>
        <SearchError username={ uname } show={ this.state.searchError } dismiss={ this.resetSearchError }/>
      </div>
    );
  }
};

Profile.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Profile;