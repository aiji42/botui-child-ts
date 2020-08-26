import { FC, createContext, useState } from 'react'
import { useCorsState } from 'use-cors-state'

const SynchtonizerContext = createContext<{ setTargetWindow: (arg: Window) => void, state: any, setState: (arg: any) => void }>({
  setTargetWindow: () => { }, state: {}, setState: () => { }
})

const Synchtonizer: FC = (props) => {
  const [targetWindow, setTargetWindow] = useState<Window>(window)
  const [state, setState] = useCorsState('chat-messages', { window: targetWindow }, {})

  return (
    <SynchtonizerContext.Provider value={{ setTargetWindow, state, setState }} {...props} />
  )
}

export default Synchtonizer