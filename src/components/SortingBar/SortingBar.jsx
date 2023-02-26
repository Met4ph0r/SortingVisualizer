import React from 'react';

const SortingBar = (props) => {
  // let color = '#11FFEE';
  // let color = '#c096ff';
  let color = '#938fa6';

  switch (props.colorCode) {
    case 1:
      color = '#9cffdb';
      
      break;
    case 2:
      color = '#ff9cb9';
      // color = '#f79368';
      break;
    case 3:
      // color = '#687bf7';
      // color = '#96c2ff';
      color = '#a569ff';
      break;
      
    default:
      break;
  }

  return <div style={{...props.style, backgroundColor: color, borderRadius: '6px 6px 0px 0px', transition: 'height 400ms'}}></div>;
};

export default SortingBar;
