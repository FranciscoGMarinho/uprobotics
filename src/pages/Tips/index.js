import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import apresentacao from "../../assets/images/slide.png"
import { Button, Card, Row, Col } from 'react-materialize';
import M from'materialize-css';
import '../../App.css';

class Tips extends React.Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
      return (
      
      <Fragment>
        <h1>Dicas</h1>
      </Fragment>
    );
  }
}

export default Tips;