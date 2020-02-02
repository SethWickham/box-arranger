import React from 'react';

const box = props => (props.show ? <div> Box {props.boxNumber}</div> : null);

export default box;
