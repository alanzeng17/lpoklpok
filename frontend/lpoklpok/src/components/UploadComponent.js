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


class UploadComponent extends Component{
    constructor() {
        super();
        this.state = {
            pairs: [],
            link: '/resultsh',
            inputtext: '',
        }
    }
    makeApiCall(link){
        fetch('http://localhost:3000', {method: 'post', body: link})
        .then(results => {
            return results.json;
        }).then(data => {
            let pairs = data.results.map((point) => {
                return(
                    //<Grid columns={3}></Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Header as='h2' textAlign='center' content='Some Key Phrase' 
                        style={{fontSize: '1.7em', fontWeight: 'bold', marginTop: '3.8em', color:'#123C69'}}/>
                        </Grid.Column>
                        <Grid.Column>
                        <Header as='h4' textAlign='center' content='Timestamps' 
                        style={{fontSize: '1.7em', fontWeight: 'normal', marginTop: '1em', color:'#123C69'}}/>
                        </Grid.Column>
                    </Grid.Row>
                )
            })
            this.setState({pairs: pairs});
            console.log(this.state.pairs);
        })
    }

    handleMessage (e) { 
        console.log("YGOOOOOGOOO");
        console.log(e.target.value);
        console.log("YOYO");
        if (e.target.value === 'https://www.youtube.com/watch?v=7EnWiGYT1g4')
        { 
            this.setState({link:'/results'});
            console.log(this.state.link);
        }
        if (e.target.value === 'https://www.youtube.com/watch?v=bEr2k42qUg8') {
            this.setState({link: '/resultso'});
        }
    }
    render() {
        return (
            <Container textAlign='center' text>
            <Image src={myImage} size='medium' centered></Image>
            <Header
            as='h2'
            content='Upload the YouTube link of video to Snip!'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
              color: '#123C69',
            }}/>
            <Input onChange={this.handleMessage.bind(this)} placeholder='Search' />
            <br></br><br></br>
        
            <Link to={this.state.link}>
            <Button size='huge'>
                Submit
                <Icon name='right arrow' />
            </Button>
            </Link>
        </Container>
        )
    }
}

export default UploadComponent