var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  setRef: function(ref) {
    this.note = ref;
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var newNote = this.note.value;
    this.note.value = '';
    if (this.note.value) {
      this.props.addNote(newNote);
    }
  },
  render: function() {
    const buttonClasses = "btn btn-primary";
    const smallClasses = "form-text form-muted";
    return (
      <form id="note-form" name="note-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="add-note-input">Add a note:</label>
          <input type="text" id="add-note-input" className="form-control" aria-describedby="add-note-subtext" placeholder={ this.props.username + ' is such a ... ' } ref={this.setRef}/>
          <small id="add-note-subtext" className={ smallClasses }>Go on, say something!</small>
        </div>
        <button type="submit" className={ buttonClasses }>Post</button>
      </form>
    );
  }
});

module.exports = AddNote;