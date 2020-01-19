import React, { Component } from 'react';

import styles from '../Display/Display.module.css';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';

class display extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.Display}>
          {' '}
          <Box></Box>
          <Button></Button>
        </div>
      </div>
    );
  }
}

export default display;
