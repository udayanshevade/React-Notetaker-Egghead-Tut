import React from 'react';
import Note from './Note.js';

const NotesList = ({notes}) => {
  if (!notes.length) {
    return <p className="list-group-item disabled">Nothing yet. Say something!</p>;
  } else {
    return (
      <ul className="list-group">
        { notes.map((note, i) => {
          return <Note key = { i } note={ note }/>;
        }) }
      </ul>
    );
  }
};

export default NotesList;