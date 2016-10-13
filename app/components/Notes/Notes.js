var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired,
  },
  render: function() {
    var cardTitleClasses = "card-title text-xs-center";
    return (
      <div className="card notes-card">
        <div className="card-block">
          <h4 className={ cardTitleClasses }>Say what?</h4>
        </div>
        <div className="card-block">
          <AddNote username={ this.props.username }
            addNote={ this.props.addNote } notes={ this.props.notes }/>
        </div>
        <div className="card-block">
          <h6>The buzz:</h6>
        </div>
        <NotesList notes={ this.props.notes }/>
      </div>
    );
  }
});

module.exports = Notes;