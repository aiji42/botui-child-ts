import React, { useRef } from 'react';
import Synchronizer from '../Synchronizer'

const Board = () => {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <div style={{ width: '100%' }}>
      {/* <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" /> */}
      <iframe ref={ref} src="https://aiji42.github.io/use-postal-jp/" height="100%" width="100%" frameBorder="no" />
      {!!ref.current?.contentWindow && <Synchronizer window={ref.current.contentWindow} />}
    </div>
  );
};

export default Board;