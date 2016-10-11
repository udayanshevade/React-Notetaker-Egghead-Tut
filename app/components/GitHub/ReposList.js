var React = require('react');

var ReposList = React.createClass({
  render: function() {
    var list;
    if (!this.props.repos) {
      list = 'No repos available.';
    } else {
      list = this.props.repos.map(listItem => {
        return (
          <li key={listItem.id} className="list-group-item">
            <h5 className="repo-name"><a className="repo-link" href={listItem.url}>{listItem.name}</a></h5>
            <p className="repo-description">{listItem.description || 'No description available'}</p>

          </li>
        );
      });
    }

    return (
      <ul className="list-group">
        { list }
      </ul>
    );
  }
});

module.exports = ReposList;