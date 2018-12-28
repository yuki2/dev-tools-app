import React, { PureComponent } from 'react'
import { Button } from 'reactstrap'

import './encode.css'

export default class EncodeDecodeComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      output: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEncodeButton = this.handleEncodeButton.bind(this)
    this.handleDecodeButton = this.handleDecodeButton.bind(this)
    this.handleClearButton = this.handleClearButton.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleEncodeButton() {
    const { input } = this.state
    const { encode } = this.props
    this.setState({ output: encode(input) })
  }

  handleDecodeButton() {
    const { input } = this.state
    const { decode } = this.props
    this.setState({ output: decode(input) })
  }

  handleClearButton() {
    this.setState({
      input: '',
      output: '',
    })
  }

  render() {
    const { title } = this.props
    return (
      <div className="Encode-Container">
        <header className="Encode-Header">
          <h1>{title}</h1>
        </header>
        <div className="Encode-Contents">
          <div className="Encode-Textareas">
            <textarea
              className="Encode-Textarea"
              name="input"
              rows="15"
              value={this.state.input}
              placeholder="Enter the text that you wish to encode or decode."
              onChange={this.handleChange}
            />
            <textarea
              className="Encode-Textarea"
              name="output"
              rows="15"
              value={this.state.output}
              placeholder="Your results will appear here."
              disabled
            />
          </div>
          <div className="Encode-Buttons">
            <Button className="Encode-Button" onClick={this.handleEncodeButton}>
              Encode
            </Button>
            <Button className="Encode-Button" onClick={this.handleDecodeButton}>
              Decode
            </Button>
            <Button className="Encode-Button" onClick={this.handleClearButton}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
