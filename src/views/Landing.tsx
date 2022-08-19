import React, { FC } from "react";

export type LandingProps = {
  /* insert props */
}

export const Landing: FC<LandingProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return <div>Landing</div>;
};

export default Landing;
