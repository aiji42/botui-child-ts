import React, { FC, useEffect, useState } from 'react'
import { useCorsState } from 'use-cors-state'
import { proposals as initProposals, Propsals } from './proposal'

const values = (messages: Propsals): { [x: string]: any } => messages.reduce((res, message) => {
  if (message.content.type !== 'form') return res
  return message.content.props.values ? { ...res, ...message.content.props.values } : res
}, {})

const Communicator: FC<{ targetWindow: Window }> = ({ targetWindow }) => {
  const [messages, setMessages] = useCorsState<Propsals>('chat-messages', { window: targetWindow }, [])
  const [proposals, setProposals] = useState<Propsals>(initProposals)

  useEffect(() => {
    const updatedIndex = messages.findIndex(({ updated }) => updated)
    if (updatedIndex > 0) {
      setMessages([...messages.slice(0, updatedIndex), { ...messages[updatedIndex], updated: false }])
      return
    }
    setProposals([...messages, ...proposals.slice(messages.length).reduce<Propsals>((res, original) => [...res, { ...original, completed: false }], [])])
  }, [messages])

  useEffect(() => {
    if (messages.some(({ completed }) => !completed)) return

    const unCompletedIndex = proposals.findIndex(({ completed }) => !completed)
    const tailMessage = proposals[unCompletedIndex - 1]
    if (tailMessage?.after) {
      const afterFunction = new Function('values', 'message', tailMessage.after)
      afterFunction(values(proposals), tailMessage)
    }

    if (!proposals[unCompletedIndex]) return
    const nextMessage = { ...proposals[unCompletedIndex], completed: false }
    if (nextMessage.before) {
      const beforeFuction = new Function('values', 'message', nextMessage.before)
      beforeFuction(values(proposals), nextMessage)
    }

    setMessages([...proposals.slice(0, unCompletedIndex), nextMessage])
  }, [proposals])

  return <></>
}

export default Communicator