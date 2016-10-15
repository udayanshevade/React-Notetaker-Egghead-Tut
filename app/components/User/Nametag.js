import React from 'react';

const Nametag = ({username, name, avatar, location }) => {
  return (

    <div className="card-block col-xs-12 push-lg-4 col-lg-4">

      { avatar &&
        <img className="img-fluid m-x-auto  profile-image card-img-top" src={ avatar } alt={ 'GitHub avatar of ' + username }/>
      }

      <h3 className="card-title"><code>{ username }</code></h3>

      { name  &&
        <h4 className="profile-name">{ name }</h4>
      }

      { location &&
        <p className="profile-location">{ location }</p>
      }

    </div>

  );
};

export default Nametag;