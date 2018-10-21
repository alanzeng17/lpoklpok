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
  Input,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Upload = ({mobile=false}) => (
    <Container text>
    <Header
      as='h1'
      content='Upload'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '3.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Upload your Youtube link here:'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Input placeholder='Search...' />
    <Link to="/content"><Button primary size='huge'>
      Continue
      <Icon name='right arrow' />
    </Button></Link>
  </Container>
)
export default Upload