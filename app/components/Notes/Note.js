import React from 'react';

const Note = ({note}) => {
  return (
    <li className="list-group-item">
      <span>{ note }</span>
    </li>
  );
}

export default Note;