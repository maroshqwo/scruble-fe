import React, { FC } from "react";

export type HistoryProps = {
  /* insert props */
}

export const History: FC<HistoryProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return <div>History</div>;
};

export default History;
