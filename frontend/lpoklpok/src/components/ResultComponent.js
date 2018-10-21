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
const ResultComponent = (input) => (
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
            <Table.Cell>Expensive Secret Ingredients</Table.Cell>
            <Table.Cell>00:51</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Crab Burger</Table.Cell>
            <Table.Cell>01:10</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Natural Umami Bombs</Table.Cell>
            <Table.Cell>2:10</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Low Oven</Table.Cell>
            <Table.Cell>3:17</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Parmesan Cheese Crisps</Table.Cell>
            <Table.Cell>3:56</Table.Cell>
        </Table.Row>
        </Table.Body>
        <Table.Footer>
        </Table.Footer>
        </Table>
        </Grid.Column>
        <Grid.Column centered>
            <iframe width="480" height="320" src="https://www.youtube.com/embed/7EnWiGYT1g4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </Grid.Column>
    </Grid.Row>
    </Grid>

    <Button size='huge'>
            Start Over
    </Button>
    </Container>
)
export default ResultComponent;