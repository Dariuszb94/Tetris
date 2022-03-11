import React, { useState } from 'react';
import { createStage } from './gameHelpers';

//Custom hooks
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';

//Components
import Stage from './components/Stage/Stage';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';

// Stylse
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);
  const { player, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage(player, resetPlayer);
  const movePlayer = (dir: number) => {
    updatePlayerPos({ x: dir, y: 0, collided: false });
  };
  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      // Just call once
      if (repeat) return;
      setDropTime(30);
    } else if (keyCode === 38) {
      // Rotation
    }
  };
  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className='display'>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text='Game Over!' />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
