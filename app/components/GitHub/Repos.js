import React from 'react';
import ReposList from './ReposList';

const Repos = ({repos}) => {
  return (
    <div className="card repos-card">
      <div className="card-block">
        <h4 className="card-title text-xs-center">Projects</h4>
      </div>
      <ReposList repos={ repos }/>
    </div>
  );
};

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired
};

export default Repos;