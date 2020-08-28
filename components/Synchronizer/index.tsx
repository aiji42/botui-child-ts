import React, { FC } from 'react'
import { useCorsState } from 'use-cors-state'

interface Message {
  human: boolean,
  content: any
}
type Messages = Message[]

interface Props { window: Window }

const Synchtonizer: FC<Props> = ({ window }) => {
  const [state, setState] = useCorsState<Messages>('chat-messages', { window }, [])

  return <></>
}

export default Synchtonizer