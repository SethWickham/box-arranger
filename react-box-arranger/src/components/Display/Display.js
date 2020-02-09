import React from 'react';

import Arranger from '../Arranger/Arranger';
import styles from '../Display/Display.module.css';
const display = () => (
  <div className={styles.Container}>
    <div className={styles.Title}>
      <h1>Arranger</h1>
    </div>
    <div className={styles.Display}>
      <Arranger />
    </div>
  </div>
);

export default display;
