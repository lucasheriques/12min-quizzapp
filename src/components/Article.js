import React from 'react';

function Article(props) {
  return (
    <div>
      <div className="content">{props.content}</div>
    </div>
  );
}

Article.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default Article;
