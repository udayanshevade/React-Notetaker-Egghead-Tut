import React from 'react';

const GitDetails = ({repos, date, followers }) => {
  return (
    <div className="github-details flex-content">
      { repos &&
        <div className="github-detail">
          <h5>Repos</h5>
          <i className="fa fa-code"></i>
          <p className="detail">{ repos }</p>
        </div>
      }
      { date &&
        <div className="github-detail">
          <h5>Since</h5>
          <i className="fa fa-calendar-o"></i>
          <p className="detail">{ date.getMonth() + '/' + date.getFullYear() }</p>
        </div>
      }
      { followers &&
        <div className="github-detail">
          <h5>Followers</h5>
          <i className="fa fa-users"></i>
          <p className="detail">{ followers }</p>
        </div>
      }
    </div>
  );
};

export default GitDetails;