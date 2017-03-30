import React from 'react';

function TimerButton(props) {
  return (
    <div>
      <button onClick={props.handleTimer}>{props.buttonText}</button>
    </div>
  );
}

TimerButton.propTypes = {
  buttonText: React.PropTypes.string.isRequired,
  handleTimer: React.PropTypes.func.isRequired
};

export default TimerButton;
