import React from 'react';

import Quote from './Quote';
import Buttons from './Buttons'

class QuotesContsiner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      color: '#695b51',
      quote: '',
      author: ''
    };
  }

  handleClick = event => {
    console.log(event)
    const colorArray = [
      "#002962", "#007c86", "#9e324d", "#da1820",
      "#fcd134", "#79c142", "#70c405", "#0397d5", "#37baf5",
      "#00aec2", "#a90412", "#27308b", "#20328f", "#ff1744",
      "#000000", "#ac6283", "#ff1744", "#4e021b", "#77001a",
      "#20328f", "#27308b", "#556832", "#695b51", "#ea4cc0",
      "#ffc300", "#4285f4", "#840000", "#4285f4", "#ffc300",
      "#bebebe", "#dddddd", "#f5f5dc", "#cbbeb5",
      "#808080", "#f5f5f5", "#c0d6e4", "#468499", "#cccccc"
    ];

    const colorIndex = Math.floor(Math.random() * colorArray.length);
    const newColor = colorArray[colorIndex];
    document.body.style.backgroundColor = newColor;
    document.body.style.color = newColor;

    const icons = document.querySelectorAll('.icons');
    icons.forEach(icon => icon.style.backgroundColor = newColor);

    const button = document.querySelector('#new-quote');
    button.style.backgroundColor = newColor;

    const quoteIndex = Math.floor(Math.random() * this.state.quotes.length);

    const author = this.state.quotes[quoteIndex].author;
    const quote = this.state.quotes[quoteIndex].quote;

    this.setState({
      quote,
      author
    })
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/')
      .then(response => response.json())
      .then(data => {
        const quotes = data.quotes;

        this.setState({
          quotes
        });
      });


    setTimeout(this.handleClick, 1000);
  }

  render() {
    return (
      <div id="quote-box">
        <Quote quote={this.state.quote} author={this.state.author} />
        <Buttons handleClick={this.handleClick} quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}

export default QuotesContsiner;