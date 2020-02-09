import React, { Component } from 'react';

import Box from '../Box/Box';
import Button from '../Button/Button';

import styles from '../Box/Box.module.css';

export default class Arranger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrangeOne: true,
      arrangeTwo: false,
      arrangeThree: false,
      arrangeFour: false
    };
  }

  arrangeOneHandler = () => {
    this.setState({
      arrangeOne: true,
      arrangeTwo: false,
      arrangeThree: false,
      arrangeFour: false
    });
  };
  arrangeTwoHandler = () => {
    this.setState({
      arrangeOne: false,
      arrangeTwo: true,
      arrangeThree: false,
      arrangeFour: false
    });
  };
  arrangeThreeHandler = () => {
    this.setState({
      arrangeOne: false,
      arrangeTwo: false,
      arrangeThree: true,
      arrangeFour: false
    });
  };
  arrangeFourHandler = () => {
    this.setState({
      arrangeOne: false,
      arrangeTwo: false,
      arrangeThree: false,
      arrangeFour: true
    });
  };

  render() {
    return (
      <div>
        {this.state.arrangeOne ? (
          <div>
            <div className={styles.Box1}>
              <Box boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box boxNumber={4}></Box>
            </div>
            <h1>Arrangement One</h1>
          </div>
        ) : null}
        {this.state.arrangeTwo ? (
          <div>
            <div className={styles.Box2}>
              <Box boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box boxNumber={1}></Box>
            </div>
            <h1> Arrangement Two</h1>
          </div>
        ) : null}
        {this.state.arrangeThree ? (
          <div>
            <div className={styles.Box3}>
              <Box boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box boxNumber={2}></Box>
            </div>
            <h1>Arrangement Three</h1>
          </div>
        ) : null}
        {this.state.arrangeFour ? (
          <div>
            <div className={styles.Box4}>
              <Box boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box boxNumber={3}></Box>
            </div>
            <h1>Arrangement Four</h1>
          </div>
        ) : null}
        <Button clicked={this.arrangeOneHandler} btnNmbr="One" />
        <Button clicked={this.arrangeTwoHandler} btnNmbr="Two" />
        <Button clicked={this.arrangeThreeHandler} btnNmbr="Three" />
        <Button clicked={this.arrangeFourHandler} btnNmbr="Four" />
      </div>
    );
  }
}
