import { Row } from 'antd';
import React from 'react';
import AlgorithmDropDown from './AlgorithmDropDown';
import InputSizeSlider from './InputSizeSlider';
import RandomizeButton from './RandomizeButton';
import SpeedSlider from './SpeedSlider';
import StartButton from './StartButton';

const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing,
}) => {

  return (
    <Row
      style={{
        // background: '#7748f0',
        // background: '#c096ff',
        background: '#b586fc',
        color: 'white',
        padding: '10px 0px 10px 0px',
        width: '100%',
      }}
      align="middle"
      justify="space-around"
    >

      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart} />
    </Row>
  );
};

export default HomeHeader;
