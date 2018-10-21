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
import kevinImage from '../images/kevin.jpg';


const IntroComponent = ({ mobile=false }) => (
    <div>
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
    <div className='divClass'>
    <Grid divided='vertically'>
    <Grid.Row columns={2} divided>
    <Grid.Column>
        <Header as='h2' textAlign='center' content='About Snipit' 
        style={{fontSize: '1.7em', fontWeight: 'bold', marginTop: '3.8em', color:'#FFFFFF'}}/>
        <Divider />
        <Header as='h4' textAlign='center' content='Snipit is a program that uses speech-recognition software to segment large video and audio files to organize the information into tangible and relevant pieces of data. Snipit works by locating keywords spoken throughout the file using speech-to-text software, analyzing the keywords spoken, and breaking the video into distinct categories where the keywords appear the most. ' 
        style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1em', color:'#FFFFFF'}}/>
        <Divider />
        <Header as='h1'></Header>
    </Grid.Column>
    <Grid.Column>
        <Header as='h2' textAlign='center' content="How it's made"
        style={{fontSize: '1.7em', fontWeight: 'bold', marginTop: '3.8em', color:'#FFFFFF'}}/>
        <Divider />
        <Header as='h4' textAlign='center' content='Snipit uses React.js for its front-end, Python for its back-end, and Rev.ai fori its speech recognition component. ' 
        style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1em', color:'#FFFFFF'}}/>
        <Divider />
        <Header as='h1'></Header>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
    </div>
  )
export default IntroComponent