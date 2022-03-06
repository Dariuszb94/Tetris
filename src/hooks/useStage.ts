import React from 'react';
import { createStage } from '../gameHelpers';

//Types
import type { PLAYER } from './usePlayer';

import { STAGECELL } from '../components/Stage/Stage';
import { STAGE } from '../components/Stage/Stage';

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
  const [stage, setStage] = React.useState(createStage());
  React.useEffect(() => {
    if (!player.pos) return;

    const updateStage = (prevStage: STAGE): STAGE => {
      //First flush the stage
      //If it says 'clear', but it don't have zero => it is a player's move

      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === 'clear' ? [0, 'clear'] : cell
          ) as STAGECELL[]
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
    };
  }, [player.collided, player?.pos.x, player?.pos.y, player.tetromino]);
};
