import React, { Component } from 'react';

import styles from '../Display/Display.module.css';
import Box from '../../components/Box/Box';

class display extends Component {
  render() {
    return (
      <div className={styles.Display}>
        Hi
        <div>
          {' '}
          <Box></Box>
        </div>
      </div>
    );
  }
}

export default display;
