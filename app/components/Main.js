import React from 'react';
import UserSearch from './UserSearch';

const Main = ({children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-dark bg-inverse">
        <a className="navbar-brand" href="">
          <i className="fa fa-home"></i>
        </a>
        <UserSearch/>
      </nav>
      <div className="container-fluid">
        { children }
      </div>
    </div>
  );
}

export default Main;