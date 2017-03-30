import React from 'react';

function Title(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

Title.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Title;
