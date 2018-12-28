import React, { PureComponent } from 'react'
import Encode from './components/encode'

class URLEncode extends PureComponent {
  constructor(props) {
    super(props)

    this.encode = this.encode.bind(this)
    this.decode = this.decode.bind(this)
  }

  encode(str) {
    return encodeURIComponent(str)
  }

  decode(str) {
    return decodeURIComponent(str)
  }

  render() {
    return (
      <Encode
        title={'URL Encode/Decode'}
        encode={this.encode}
        decode={this.decode}
      />
    )
  }
}

export default URLEncode
