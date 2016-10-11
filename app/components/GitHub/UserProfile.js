var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function() {
    var cardClasses = "card text-xs-center";
    var imgClasses = "img-fluid img-rounded";
    return (

      <div className={ cardClasses }>

        <div className="card-block">

          <h3 className="card-title">{ this.props.username }</h3>
          <h4 className="profile-name">{ this.props.bio.name }</h4>

          <p className="profile-location">{ this.props.bio.location }</p>
          <p className="profile-bio">{ this.props.bio.bio }</p>

          <img className={ imgClasses } src={ this.props.bio.avatar_url } alt={ 'GitHub avatar of ' + this.props.username }/>

        </div>

      </div>

    );
  }
});

module.exports = UserProfile;