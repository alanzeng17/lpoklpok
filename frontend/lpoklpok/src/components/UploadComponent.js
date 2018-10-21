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

const UploadComponent = () => (
    <Container text>
        <Header
        as='h2'
        content='Upload the YouTube link of video to Snip!'
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em',
          color: '#123C69',
        }}/>
        <Input placeholder='Search...' />
        <br></br><br></br>
        <Link to='/result'>
        <Button size='huge'>
            Submit
            <Icon name='right arrow' />
        </Button>
        </Link>
    </Container>
)
export default UploadComponent