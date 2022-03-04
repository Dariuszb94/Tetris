import React from 'react';

//Components
import Stage from './components/Stage/Stage';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';

// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>Start here!</StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
