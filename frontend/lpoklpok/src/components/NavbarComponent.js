import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import IntroComponent from './IntroComponent.js'
import UploadComponent from './UploadComponent.js'
import RouteContainer from "./RouteComponent";
import styled from "styled-components";
import '../App.css';
import myImage from '../images/small_icon.png';


class NavbarComponent extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state
        return (
        <Wrapper>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
        >

            <Menu
            pointing={fixed}
            secondary={!fixed}
            size='large'
            color='#123C69'
            >
            <Container textAlign='center' id='font' color='#123C69'>
                <Menu.Item>
                <Image src={myImage}/>
                </Menu.Item>
                <Link to='/'>
                <Menu.Item as='a' active={activeItem === 'Home'} onClick={this.handleItemClick}>
                Home
                </Menu.Item>
                </Link>
                <Link to='/about'>
                <Menu.Item as='a' onClick={this.handleItemClick} >About</Menu.Item>
                </Link>
                <Link to='/contact'>
                <Menu.Item as='a' onClick={this.handleItemClick}>Contact</Menu.Item>
                </Link>
                <Menu.Item position='right'>
                </Menu.Item>
            </Container>

            </Menu>
        </Visibility>

        {children}
    </Responsive>
            </Wrapper>

        );
    }
}
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #EDC7B7;
  color: #123C69;
  
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default NavbarComponent