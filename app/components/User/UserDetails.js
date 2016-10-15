import React from 'react';
import GitDetails from './GitDetails.js';

const UserDetails = ({bio, github, blog, email, repos, date, followers}) => {
  return (
    <div className="card-block col-xs-12 col-lg-4 flex-content user-details">

      { bio &&
        <blockquote className="blockquote-reverse">bio</blockquote>
      }

      <div className="btn-group" role="group" aria-label="Basic example">

        <button type="button" className="btn btn-secondary">
          <a className="github-link button-link" href={ github }><i className="fa fa-github-alt"></i></a>
        </button>

        { blog &&
          <button type="button" className="btn btn-secondary">
            <a className="blog-link button-link" href={ blog }>
              <i className="fa fa-github-alt"></i>
            </a>
          </button>
        }

        { email &&
         <button type="button" className="btn btn-secondary">
          <a className="email-link button-link" href={ 'mailto:' + email } type="email">
            <i className="fa fa-envelope-o"></i>
          </a>
        </button>
        }

      </div>

      <GitDetails repos={ repos } date={ date } followers= { followers }/>

    </div>
  );
};

export default UserDetails;