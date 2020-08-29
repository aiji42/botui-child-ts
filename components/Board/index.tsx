import React, { useState } from 'react';
import Synchronizer from '../Synchronizer'

const Board = () => {
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement|null>(null)

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" /> */}
      <iframe ref={setIframeElement} src="http://127.0.0.1:49841/" height="100%" width="100%" frameBorder="no" />
      {!!iframeElement?.contentWindow && <Synchronizer window={iframeElement.contentWindow} />}
    </div>
  );
};

export default Board;