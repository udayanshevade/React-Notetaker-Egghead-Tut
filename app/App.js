var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Firebase = require('firebase');
var routes = require('./config/routes');

import { hashHistory } from 'react-router';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBpBxfNCtzsS9fC5lit7PtmkzGWjRyJOJY",
  authDomain: "first-react-app-a76ec.firebaseapp.com",
  databaseURL: "https://first-react-app-a76ec.firebaseio.com",
  storageBucket: "first-react-app-a76ec.appspot.com",
  messagingSenderId: "763887315114"
};
Firebase.initializeApp(config);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);