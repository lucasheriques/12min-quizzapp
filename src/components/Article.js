import React from 'react';

function Article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p className="content">{props.content}</p>
    </div>
  );
}

Article.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  word_count: React.PropTypes.number.isRequired
};

export default Article;
