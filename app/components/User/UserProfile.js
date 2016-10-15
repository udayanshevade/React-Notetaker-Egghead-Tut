import React from 'react';
import Map from '../Map/Map.js';
import Nametag from './Nametag.js';
import UserDetails from './UserDetails.js';

const UserProfile = ({username, bio}) => {
  const since = (bio.created_at) ? new Date(bio.created_at) : null;
  return (

    <div className="card profile-card text-xs-center">

      <Nametag username={ username } avatar={ bio.avatar_url } name={ bio.name } location={ bio.location } />

      { bio.location && <Map google={ google } location={ bio.location } />}

      <UserDetails bio={ bio.bio } blog={ bio.blog } email={ bio.email } date={ since } repos={ bio.public_repos } followers={ bio.followers } github={ bio.html_url }/>

    </div>

  );
};

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;