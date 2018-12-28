import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
  DropdownItem
} from 'reactstrap';

import { Base64EncodeComponent, URLEncodeComponent } from './modules/encode';
import {
  ColorConversionComponent,
  NumberConversionComponent
} from './modules/conversion';
import HomeComponent from './modules/home/HomeComponent';
import './App.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">
              Dev Tools
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Conversion
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="/conversion/number/">
                      Number
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/conversion/color/">
                      Color
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Encode/Decode
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="/encode/url/">
                      URL Encode
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/encode/base64/">
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
          <Route path="/" exact component={HomeComponent} />
          <Route path="/encode/url/" component={URLEncodeComponent} />
          <Route path="/encode/base64/" component={Base64EncodeComponent} />
          <Route
            path="/conversion/number/"
            component={NumberConversionComponent}
          />
          <Route
            path="/conversion/color/"
            component={ColorConversionComponent}
          />
        </div>
      </Router>
    );
  }
}
