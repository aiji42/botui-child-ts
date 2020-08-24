import { FC } from 'react'
import { useCorsState } from 'use-cors-state'

const Synchtonizer: FC = (props) => {
  const [state, setState] = useCorsState('chat-messages', { window }, {})

  return <div {...props}/>
}

export default Synchtonizer