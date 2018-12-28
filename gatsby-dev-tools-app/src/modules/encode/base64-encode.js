import React, { PureComponent } from 'react'
import Encode from './components/encode'

class Base64Encode extends PureComponent {
  constructor(props) {
    super(props)

    this.encode = this.encode.bind(this)
    this.decode = this.decode.bind(this)
  }

  encode(str) {
    let result
    try {
      result = btoa(unescape(encodeURIComponent(str)))
    } catch (e) {
      result = ''
    }
    return result
  }

  decode(str) {
    let result
    try {
      result = decodeURIComponent(escape(atob(str)))
    } catch (e) {
      result = ''
    }
    return result
  }

  render() {
    return (
      <Encode
        title={'Base64 Encode/Decode'}
        encode={this.encode}
        decode={this.decode}
      />
    )
  }
}

export default Base64Encode
