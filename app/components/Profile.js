import React from 'react';
import UserProfile from './User/UserProfile.js';
import Repos from './GitHub/Repos.js';
import Notes from './Notes/Notes.js';
import Firebase from 'firebase';
import Rebase from 're-base';
import GitHub from 'github-api';

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
      repos: []
    };
    this.loadGitHubBio = this.loadGitHubBio.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.initializeUser = this.initializeUser.bind(this);
  }
  loadGitHubBio(user) {
    const self = this;
    const gh = new GitHub();
    const ghUser = gh.getUser(user);

    ghUser.listRepos().then((data) => {
      this.setState({
        repos: data.data
      });
      // console.log(this.state.repos);
    });

    ghUser.getProfile().then((data) => {
      this.setState({
        bio: data.data
      });
      console.log(this.state.bio);
    });

  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  initializeUser(username) {
    this.user = base.bindToState(username, {
      context: this,
      AsArray: true,
      state: 'notes'
    });
    this.loadGitHubBio(username);
  }
  componentWillMount() {
    this.initializeUser(this.props.params.username);
  }
  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.user);
    this.initializeUser(nextProps.params.username);
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
      </div>
    );
  }
};

export default Profile;