var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    var cardTitleClasses = "card-title text-xs-center";
    return (
      <div className="card">
        <h4 className={cardTitleClasses}>Say what?</h4>
        <NotesList notes={this.props.notes}/>
      </div>
    );
  }
});

module.exports = Notes;