import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Embed,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Responsive,
  Segment,
  Table,
  Input,
  Visibility,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { render , findDOMNode} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import myImage from '../images/logo.png';
import '../styles.css';
import '../App.css';
const HurricaneComponent = (input) => (
    <Container textAlign='center' text>
    <Image src={myImage} size='medium' centered ></Image>
    <Grid columns={2} divided >
    <Grid.Row centered>
        <Grid.Column centered>
        <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
            <Table.Cell>Wind Speeds</Table.Cell>
            <Table.Cell>0:07</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Category Two</Table.Cell>
            <Table.Cell>0:29</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>House</Table.Cell>
            <Table.Cell>0:57</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Roof</Table.Cell>
            <Table.Cell>1:02</Table.Cell>
        </Table.Row>
        </Table.Body>
        <Table.Footer>
        </Table.Footer>
        </Table>
        </Grid.Column>
        <Grid.Column centered>
            <iframe width='480' height='320' src='https://www.youtube.com/embed/lqfExHpvLRY' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
        </Grid.Column>
    </Grid.Row>
    </Grid>

    <Button size='huge'>
            Start Over
    </Button>
    </Container>
)
export default HurricaneComponent;