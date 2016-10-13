var React = require('react');
var ReposList = require('./ReposList');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    var cardTitleClasses = "card-title text-xs-center";
    return (
      <div className="card repos-card">
        <div className="card-block">
          <h4 className={ cardTitleClasses }>Projects</h4>
        </div>
        <ReposList repos={ this.props.repos }/>
      </div>
    );
  }
});

module.exports = Repos;