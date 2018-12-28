import React, { PureComponent } from 'react'
import { Button, Table } from 'reactstrap'

import './number-conversion.css'

class NumberConversion extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      binary: '',
      octal: '',
      decimal: '',
      hex: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleConvertButton = this.handleConvertButton.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleConvertButton(event) {
    const { name } = event.target
    const value = this.state[name]
    let decimalValue = 0
    switch (name) {
      case 'binary':
        decimalValue = parseInt(value, 2)
        break
      case 'octal':
        decimalValue = parseInt(value, 8)
        break
      case 'decimal':
        decimalValue = parseInt(value, 10)
        break
      case 'hex':
        decimalValue = parseInt(value, 16)
        break
      default:
        break
    }
    this.setState({
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      decimal: decimalValue,
      hex: decimalValue.toString(16),
    })
  }

  renderRow(title, name, value) {
    return (
      <tr>
        <td className="Number-Text">{title}</td>
        <td>
          <input
            name={name}
            type="text"
            value={value}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <Button name={name} onClick={this.handleConvertButton}>
            Convert
          </Button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="Number-Container">
        <header className="Number-Header">
          <h1>Number Conversion</h1>
        </header>
        <div className="Number-Table">
          <Table borderless>
            <tbody>
              {this.renderRow('Binary number:', 'binary', this.state.binary)}
              {this.renderRow('Octal number:', 'octal', this.state.octal)}
              {this.renderRow('Decimal number:', 'decimal', this.state.decimal)}
              {this.renderRow('Hex number:', 'hex', this.state.hex)}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default NumberConversion
