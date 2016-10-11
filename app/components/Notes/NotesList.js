var React = require('react');

var NotesList = React.createClass({
  render: function() {
    var list;
    if (!this.props.notes.length) {

      list = <li className="list-group-item">Nothing yet. Say something!</li>;

    } else {

      list = this.props.notes.map(listItem => {

        let key = listItem[".key"];
        let value = listItem[".value"];

        return (
          <li key={ key } className="list-group-item">
            <span>{ value }</span>
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