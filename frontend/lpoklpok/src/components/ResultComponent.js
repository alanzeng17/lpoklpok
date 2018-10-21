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
  Input,
  Visibility,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { render , findDOMNode} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import myImage from '../images/logo.png';

const ResultComponent = (input) => (

    <Container textAlign='center' text>
        <Image src={myImage} size='medium' centered ></Image>
        <Header
        as='h2'
        content='Some Grid Results Here!'
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em',
          color: '#123C69',
        }}/>
        <br></br><br></br>
        <Link to='/result'>
        <Button size='huge'>
            ????
            <Icon name='right arrow' />
        </Button>
        </Link>
    </Container>
)
export default ResultComponent;