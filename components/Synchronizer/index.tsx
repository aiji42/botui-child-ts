import React, { FC, createContext, Dispatch, SetStateAction } from 'react'
import { useCorsState } from 'use-cors-state'
import Commmunicator from '../Communicator'

interface Message {
  human: boolean
  content: any
  delay?: number
  completed: boolean
}
type Messages = Message[]

export const SynchtonizerContext = createContext<{ messages: Messages, setMessages: Dispatch<SetStateAction<Messages>> }>({ messages: [], setMessages: () => {} })

interface Props { window: Window }

const Synchtonizer: FC<Props> = ({ window }) => {
  const [messages, setMessages] = useCorsState<Messages>('chat-messages', { window }, [])

  return (
    <SynchtonizerContext.Provider value={{ messages, setMessages }}>
      <Commmunicator />
    </SynchtonizerContext.Provider>
  )
}

export default Synchtonizer