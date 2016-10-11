var React = require('react');
var ReposList = require('./ReposList');

var Repos = React.createClass({
  propTypes: {
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    var cardTitleClasses = "card-title text-xs-center";
    return (
      <div className="card">
        <h4 className={cardTitleClasses}>Projects</h4>
        <ReposList repos={this.props.repos}/>
      </div>
    );
  }
});

module.exports = Repos;