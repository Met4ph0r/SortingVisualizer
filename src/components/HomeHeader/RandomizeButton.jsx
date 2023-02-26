import React from 'react';
import {Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';

const RandomizeButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        style={{
          color: 'black',
          width: 130,
          background: 'rgba(256, 256, 256, 0.7)',
          // borderColor: '#0D1929',
          border: 'none',
          borderRadius: '10px',
          // fontWeight: 'bold',
        }}
        icon={<RedoOutlined />}
        onClick={onClick}
      >
        Randomize
      </Button>
    </div>
  );
};

export default RandomizeButton;
