import React, { Component } from 'react';

import Box from '../Box/Box';
import Button from '../Button/Button';

import styles from '../Box/Box.module.css';

export default class Rotator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrangeOne: false,
      arrangeTwo: false,
      arrangeThree: false,
      arrangeFour: false
    };
  }

  arrangeHandler() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        {this.state.arrangeOne ? (
          <div>
            <div className={styles.Box1}>
              <Box show boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box show boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box show boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box show boxNumber={4}></Box>
            </div>
            <h1>Arrangement One</h1>
          </div>
        ) : null}
        {this.state.arrangeTwo ? (
          <div>
            <div className={styles.Box2}>
              <Box show boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box show boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box show boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box show boxNumber={1}></Box>
            </div>
            <h1> Arrangement Two</h1>
          </div>
        ) : null}
        {this.state.arrangeThree ? (
          <div>
            <div className={styles.Box3}>
              <Box show boxNumber={3}></Box>
            </div>
            <div className={styles.Box4}>
              <Box show boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box show boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box show boxNumber={2}></Box>
            </div>
            <h1>Arrangement Three</h1>
          </div>
        ) : null}
        {this.state.arrangeFour ? (
          <div>
            <div className={styles.Box4}>
              <Box show boxNumber={4}></Box>
            </div>
            <div className={styles.Box1}>
              <Box show boxNumber={1}></Box>
            </div>
            <div className={styles.Box2}>
              <Box show boxNumber={2}></Box>
            </div>
            <div className={styles.Box3}>
              <Box show boxNumber={3}></Box>
            </div>
            <h1>Arrangement Four</h1>
          </div>
        ) : null}
        <Button clicked={this.arrangeHandler}></Button>
      </div>
    );
  }
}
