import React from 'react';
import {Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';

const StartButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        style={{
          width: 130,
          // background: '#0D1929',
          background: 'rgba(256, 256, 256, 0.7)',
          // borderColor: '#0D1929',
          color: 'black',
          border: 'none',
          borderRadius: '10px',
          // fontWeight: 'bold',
        }}
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;
