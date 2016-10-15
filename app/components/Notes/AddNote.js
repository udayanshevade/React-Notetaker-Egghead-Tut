import React from 'react';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setRef(ref) {
    this.note = ref;
  }
  handleSubmit(event) {
    event.preventDefault();
    const newNote = this.note.value;
    this.note.value = '';
    if (newNote) {
      this.props.addNote(newNote);
    }
  }
  render() {
    return (
      <form id="note-form" name="note-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="add-note-input">Add a note:</label>
          <input type="text" id="add-note-input" className="form-control" aria-describedby="add-note-subtext" placeholder={ this.props.username + ' is such a ... ' } ref={this.setRef}/>
          <small id="add-note-subtext" className="form-text form-muted">Go on, say something!</small>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;