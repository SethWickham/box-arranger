import React from 'react';

import styles from '../Button/Button.module.css';

const button = props => (
  <div>
    <button onClick={props.clicked} className={styles.Button}>
      Change
    </button>
  </div>
);

export default button;
