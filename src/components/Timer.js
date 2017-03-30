import React from 'react';
import Article from './Article';
import Title from './Title';
import TimerButton from './TimerButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Timer(props) {
  return (
    <ReactCSSTransitionGroup
      className=""
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <section>
          <Title title={props.title} />
          <span className="timer">{props.totalTime}</span>
          <Article content={props.content} />
          <TimerButton
            buttonText={props.buttonText}
            handleTimer={props.handleTimer}
          />
        </section>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Timer.propTypes = {
  totalTime: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string.isRequired,
  handleTimer: React.PropTypes.func.isRequired
};

export default Timer;
