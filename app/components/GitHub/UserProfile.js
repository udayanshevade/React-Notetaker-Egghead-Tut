import React from 'react';
import Map from '../Map/Map.js';

class UserProfile extends React.Component {
  render() {
    return (

      <div className="card profile-card text-xs-center">

        <div className="card-block col-xs-12 push-lg-4 col-lg-4">

          {this.props.bio.avatar_url && <img className="img-fluid m-x-auto  profile-image card-img-top" src={ this.props.bio.avatar_url } alt={ 'GitHub avatar of ' + this.props.username }/> }

          <h3 className="card-title"><code>{ this.props.username }</code></h3>
          {this.props.bio.name  && <h4 className="profile-name">{ this.props.bio.name }</h4> }

          {this.props.bio.location && <p className="profile-location">{ this.props.bio.location }</p> }
          {this.props.bio.bio && <p className="profile-bio">{ this.props.bio.bio }</p> }
        </div>
        <div className="card-block col-xs-12 pull-lg-4 col-lg-4">

          {this.props.bio.location && <Map google={ google } location={ this.props.bio.location } />}

        </div>

      </div>

    );
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;