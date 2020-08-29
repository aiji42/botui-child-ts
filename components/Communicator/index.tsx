import React, { useContext, useEffect } from 'react'
import { SynchtonizerContext } from '../Synchronizer'

const Commmunicator = () => {
  const { messages, setMessages } = useContext(SynchtonizerContext)
  useEffect(() => {
    if (messages.length > 10) return
    if (messages.every(({ completed }) => completed)) setMessages([...messages, { human: false, content: { type: 'string', props: { children: 'こんにちは' } , delay: 500 } , completed: false }])
  }, [messages])

  return (
    <button style={{ position: 'absolute', left: 0 }} onClick={() => { setMessages([...messages, { human: false, content: { type: 'string', props: { children: 'こんにちは' }, delay: 500 }, completed: false }]) }}>追加</button>
  )
}

export default Commmunicator