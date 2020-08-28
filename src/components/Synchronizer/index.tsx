import React, { FC, createContext, useState } from 'react'
import { useCorsState } from 'use-cors-state'

export const SynchtonizerContext = createContext<{ setTargetWindow: (arg: Window) => void, state: any, setState: (arg: any) => void }>({
  setTargetWindow: () => { }, state: {}, setState: () => { }
})

interface Message {
  human: boolean,
  content: any
}
type Messages = Message[]

const Synchtonizer: FC = (props) => {
  const [targetWindow, setTargetWindow] = useState<Window>(window)
  const [state, setState] = useCorsState<Messages>('chat-messages', { window: targetWindow }, [])

  return (
    <SynchtonizerContext.Provider value={{ setTargetWindow, state, setState }} {...props} />
  )
}

export default Synchtonizer