import React from 'react';

const Repo = ({data}) => {
  return (
    <li className="list-group-item">
      <a className="repo-link" href={data.url}>
        <h5 className="repo-name">{data.name}</h5>
        <p className="repo-description">{data.description || 'No description available'}</p>
      </a>
    </li>
  );
};

export default Repo;