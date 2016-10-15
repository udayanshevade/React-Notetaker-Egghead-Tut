import React from 'react';
import Repo from './Repo.js';

const ReposList = ({repos}) => {
  if (!repos.length) {
    return <p className="list-group-item disabled">No repos available.</p>;
  } else {
    return (
      <ul className="list-group">
        { repos.map((listItem, i) => {
          return <Repo key={ i } data={ listItem } />
        }) }
      </ul>
    );
  }
};

export default ReposList;