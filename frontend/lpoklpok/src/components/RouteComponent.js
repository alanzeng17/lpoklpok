import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import IntroComponent from "./IntroComponent";
import UploadComponent from "./UploadComponent";
import Results from "./ResultComponent";
import '../App.css';


function RouteContainer({ location }) {
    return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 500, exit: 300 }}
            classNames='fade'
          >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={IntroComponent} />
              <Route path="/upload" component={UploadComponent} />
              <Route path="/results" component={null} />
              <Route path="/output" component={null} />
            </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
  
  const Wrapper = styled.div`
    .route-section {
        background-color: #EEE2DC;
        padding-bottom: 670px;
    }
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
        
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
    .transition-group {
        position: relative;
        background-color: black;
    }
    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }   
  `;
  
  export default withRouter(RouteContainer);