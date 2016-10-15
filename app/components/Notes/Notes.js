import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({ username, addNote, notes }) => {
  return (
    <div className="card notes-card">
      <div className="card-block">
        <h4 className="card-title text-xs-center">Say what?</h4>
      </div>
      <div className="card-block">
        <AddNote username={ username }
          addNote={ addNote } notes={ notes }/>
      </div>
      <div className="card-block">
        <h6>The buzz:</h6>
      </div>
      <NotesList notes={ notes }/>
    </div>
  );
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired,
};

export default Notes;