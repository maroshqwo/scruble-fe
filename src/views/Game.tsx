import React, { FC } from "react";

export type GameProps = {
  /* insert props */
}

export const Game: FC<GameProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return <div>Game</div>;
};

export default Game;
