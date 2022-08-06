import React, { FC } from "react";

export type CreateGameProps = {
  /* insert props */
}

export const CreateGame: FC<CreateGameProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return <div>Create Game</div>;
};

export default CreateGame;
