import React, { PureComponent } from 'react';
import EncodeComponent from './components/EncodeComponent';

class URLEncodeComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.encode = this.encode.bind(this);
    this.decode = this.decode.bind(this);
  }

  encode(str) {
    return encodeURIComponent(str);
  }

  decode(str) {
    return decodeURIComponent(str);
  }

  render() {
    return (
      <EncodeComponent
        title={'URL Encode/Decode'}
        encode={this.encode}
        decode={this.decode}
      />
    );
  }
}

export default URLEncodeComponent;
