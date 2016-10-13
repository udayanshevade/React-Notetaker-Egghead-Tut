var React = require('react');
var Map = require('../Map/Map.js');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function() {
    return (

      <div className="card profile-card text-xs-center">

        <div className="card-block">

          <h3 className="card-title"><code>{ this.props.username }</code></h3>
          {this.props.bio.name  && <h4 className="profile-name">{ this.props.bio.name }</h4> }

          {this.props.bio.location && <p className="profile-location">{ this.props.bio.location }</p> }
          {this.props.bio.bio && <p className="profile-bio">{ this.props.bio.bio }</p> }

          {this.props.bio.avatar_url && <img className="img-fluid m-x-auto img-circle profile-image" src={ this.props.bio.avatar_url } alt={ 'GitHub avatar of ' + this.props.username }/> }

          {this.props.bio.location && <Map google={ google } location={ this.props.bio.location } />}

        </div>

      </div>

    );
  }
});

module.exports = UserProfile;