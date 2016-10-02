var React = require('react');

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-4">
          User Profile Component
        </div>
        <div className="col-xs-12 col-md-4">
          Repos Component
        </div>
        <div className="col-xs-12 col-md-4">
          Notes Component
        </div>
      </div>
    );
  }
};

module.exports = Profile;