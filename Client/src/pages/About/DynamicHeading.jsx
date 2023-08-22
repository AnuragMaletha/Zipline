import React, { Component } from 'react';
//import './about.css'

class DynamicHeadingBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headings: ['Amazing packaging', 'Superb packaging Material used', 'Caution when loading and unloading','A large network throughout India','Market Credibility Based on Safety'],
      currentHeadingIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeHeading, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHeading = () => {
    this.setState((prevState) => ({
      currentHeadingIndex: (prevState.currentHeadingIndex + 1) % prevState.headings.length,
    }));
  };

  render() {
    const { headings, currentHeadingIndex } = this.state;

    return (
      <div className="dynamicPic">
        {headings.map((heading, index) => (
          <h2
            key={index}
            className={`dynamic-heading ${index === currentHeadingIndex ? 'visible' : ''}`}
          >
            {heading}
          </h2>
        ))}
      </div>
    );
  }
}

export default DynamicHeadingBackground;
