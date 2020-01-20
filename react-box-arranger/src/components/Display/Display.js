import React, { Component } from 'react';

import styles from '../Display/Display.module.css';
import Box from '../Box/Box';
import Button from '../../components/Button/Button';
import BoxStyling from '../Box/Box.module.css';

class display extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.Display}>
          {' '}
          <div className={BoxStyling.Box1}>
            <Box boxNumber="1"> </Box>
          </div>
          <div className={BoxStyling.Box2}>
            <Box boxNumber="2"> </Box>
          </div>
          <div className={BoxStyling.Box3}>
            <Box boxNumber="3"> </Box>
          </div>
          <div className={BoxStyling.Box4}>
            <Box boxNumber="4"> </Box>
          </div>
          <Button></Button>
        </div>
      </div>
    );
  }
}

export default display;
