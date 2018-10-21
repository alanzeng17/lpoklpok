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
import { render , findDOMNode} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {$} from 'jquery';
import '../App.css';
import myImage from '../images/logo.png';


const IntroComponent = ({ mobile=false }) => (

    <Container textAlign='center' text>
    <Image src={myImage} size='medium' centered />
     {/*} <Header
        as='h1'
        content='Snipit'        
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
          color: '#123C69',
        }}
    />*/}
      <Header
        as='h2'
        content='Cutting-edge video-synthesizing technology.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          color: '#123C69',
        }}
    />
      <Link to='/upload'>
      <Button size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Link>
    </Container>
  )
export default IntroComponent