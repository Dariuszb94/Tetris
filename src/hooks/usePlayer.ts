import React from 'react';
import { STAGE_WIDTH } from '../setup';
import { randomTetromino } from '../gameHelpers';

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | number)[][];
  collided: boolean;
};
export const usePlayer = () => {
  const [player, setPlayer] = React.useState({} as PLAYER);
  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };
};
