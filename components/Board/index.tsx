import React, { useState, useEffect, FC } from 'react'
import Commuminator from '../Communicator'
import { useQuery } from '@apollo/client'
import { getSession } from '../../api/graphql'
import { Message as Proposal } from '@botui/types'

const Board: FC = () => {
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(
    null
  )
  const { loading, data } = useQuery(getSession, {
    variables: { id: 'a9b95084-93e7-4777-88c9-081747a8c2fa' }
  })
  const [initProposals, setInitProposals] = useState<Array<Proposal>>([])

  useEffect(() => {
    if (loading) return
    const {
      getSession: { proposals, active }
    } = data
    if (!active) return
    setInitProposals(JSON.parse(proposals))
  }, [loading, data])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* <iframe ref={ref} src={process.env.BOTUI_CHILD_ENDPOINT} height="100%" width="100%" frameBorder="no" /> */}
      <iframe
        ref={setIframeElement}
        src="http://127.0.0.1:63894/"
        height="100%"
        width="100%"
        frameBorder="no"
      />
      {!!iframeElement?.contentWindow && initProposals.length && (
        <Commuminator
          targetWindow={iframeElement.contentWindow}
          initProposals={initProposals}
        />
      )}
    </div>
  )
}

export default Board
