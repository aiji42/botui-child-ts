import React, { useEffect, useContext, useRef } from 'react';
import { SynchtonizerContext } from '../Synchronizer'

const Board = () => {
  const { setTargetWindow } = useContext(SynchtonizerContext)
  const ref = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    ref.current?.contentWindow && setTargetWindow(ref.current.contentWindow)
  }, [ref.current])
  return (
    <div style={{ width: '100%' }}>
      {/* <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" /> */}
      <iframe ref={ref} src="https://www.google.com/" height="100%" width="100%" frameBorder="no" />
    </div>
  );
};

export default Board;