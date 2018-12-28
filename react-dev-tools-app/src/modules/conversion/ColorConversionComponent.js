import React, { PureComponent } from 'react';

import './ColorConversionComponent.css';

const hex2rgb = hex => {
  if (hex.slice(0, 1) === '#') {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex =
      hex.slice(0, 1) +
      hex.slice(0, 1) +
      hex.slice(1, 2) +
      hex.slice(1, 2) +
      hex.slice(2, 3) +
      hex.slice(2, 3);
  }
  return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function(str) {
    return parseInt(str, 16);
  });
};

class ColorConversionComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hex: '#00bfff'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    console.log(value);
    this.setState({
      hex: value
    });
  }

  render() {
    const rgbArray = hex2rgb(this.state.hex);
    const rgbText = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    return (
      <div className="Color-Container">
        <header className="Color-Header">
          <h1>Color Conversion</h1>
        </header>
        <div className="Color-Contents">
          <div className="Color-Input-Container">
            <input
              type="text"
              value={this.state.hex}
              onChange={this.handleChange}
            />
            <text className="Color-Text">{rgbText}</text>
          </div>
          <div
            style={{
              width: `50%`,
              backgroundColor: rgbText
            }}
          />
        </div>
      </div>
    );
  }
}

export default ColorConversionComponent;
