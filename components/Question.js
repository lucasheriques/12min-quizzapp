import React from 'react';

// This component does not have a class, since it is just a stateless presentation component

function Question(props) {
  return (
    <h2 className='question'>{props.content}</h2>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
