var React = require('react');

var NotesList = React.createClass({
  render: function() {
    var list;
    if (!this.props.notes) {
      list = <li className="list-group-item">No notes available. Say something!</li>;
    }
    else {
      this.props.notes.map(listItem => {
        return (
          <li key={listItem.id} className="list-group-item">
            <span>{listItem.val}</span>
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

module.exports = NotesList;