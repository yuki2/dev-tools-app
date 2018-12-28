import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import './app.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class Navigation extends PureComponent {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.renderContents = this.renderContents.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  renderContents(data) {
    const { children } = this.props
    return (
      <div className="App">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            {data.site.siteMetadata.title}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Conversion
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/conversion/number-conversion/">
                    Number
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/conversion/color-conversion/">
                    Color
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Encode/Decode
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/encode/url-encode/">
                    URL Encode
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/encode/base64-encode/">
                    Base64 Encode
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/yuki2/react-dev-tools-app">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {children}
      </div>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery2 {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.renderContents}
      />
    )
  }
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navigation
