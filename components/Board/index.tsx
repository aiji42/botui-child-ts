import React, { useState } from 'react';
import Commuminator from '../Communicator'
import { useQuery } from '@apollo/client'
import { getSession } from '../../api/graphql'

const Board = () => {
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(null)
  const { loading, data } = useQuery(getSession, { variables: { id: 'a9b95084-93e7-4777-88c9-081747a8c2fa' } })

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" /> */}
      <iframe ref={setIframeElement} src="http://127.0.0.1:63894/" height="100%" width="100%" frameBorder="no" />
      {!!iframeElement?.contentWindow && !loading && <Commuminator targetWindow={iframeElement.contentWindow} initProposals={JSON.parse(data.getSession.proposals)} />}
    </div>
  );
};

export default Board;