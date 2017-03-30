import React, {Component} from 'react';
import articles from '../api/Articles';
import Article from '../components/Article';

class SpeedApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'inicio',
      content: '',
      word_count: 0
    }

    this.onDropdownSelected = this.onDropdownSelected.bind(this);
  }

  createSelectItems() {
    let items = [];
    for (let i = 0; i < articles.length; i++) {
      items.push(<option value={i}>{articles[i].title}</option>);
    }
    return items;
  }

  componentDidMount() {
    console.log(articles);
  }

  onDropdownSelected(e) {
    this.setState({
      title: articles[e.target.value].title,
      word_count: articles[e.target.value].word_count,
      content: articles[e.target.value].content
    });
    console.log("val: " + e.target.value);
  }

  render() {
    return (
      <div className="Article">
        <select onChange={this.onDropdownSelected}>
          <option disabled selected>Selecione qual texto gostaria de usar para medir sua velocidade</option>
          {this.createSelectItems()}
        </select>
        <Article
          title={this.state.title}
          content={this.state.content}
        />
      </div>
    );
  }
}


export default SpeedApp;
