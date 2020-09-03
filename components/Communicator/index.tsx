import React, { useContext, useEffect, useReducer, useState } from 'react'
import { SynchtonizerContext } from '../Synchronizer'
import { getNodeText } from '@testing-library/react'

interface Message {
  human: boolean
  content: any
  delay?: number
  completed: boolean
  updated?: boolean
  before?: string
  after?: string
}

const meses: Array<Message> = [
  { human: false, content: { type: 'string', props: { children: 'こんにちは' }, delay: 500 }, completed: false },
  {
    human: true, content: {
      type: 'form', props: {
        type: 'FormCustomInput', values: { hoge: 123 }, inputs: [{
          name: 'hoge', type: 'tel', title: 'サンプル', placeholder: '0123',
          validation: { type: 'number', min: [4, '桁数が足りません'] }
        }]
      }
    }, completed: false
  },
  // {
  //   human: true, content: {
  //     type: 'form', props: {
  //       type: 'FormCustomSelect', values: { fuge: 'a' }, selects: [{
  //         name: 'fuga', title: 'サンプル', options: [{ value: 'b', label: 'B' }, { value: 'c', label: 'C' }, { value: 'a', label: 'A' }]
  //       }]
  //     }
  //   }, completed: false
  // },
  // { human: true, content: { type: 'form', props: { type: 'FormCreditCard' } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormName', values: { familyName: 'あああ', familyNameKana: 'アアア' } } }, completed: false },
  { human: false, content: { type: 'string', props: { children: '' }, delay: 500 }, completed: false, before: 'message.content.props.children = `${values.familyName}さんこんにちは！`; console.log(values)' },
  { human: true, content: { type: 'form', props: { type: 'FormAddress' } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormTel', values: { tel: '08012341234' } } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormEmail' } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormBirthDay' } }, completed: false },
]

const values = (messages: Array<Message>): { [x: string]: any } => messages.reduce((res, message) => message.content.props?.values ? { ...res, ...message.content.props.values} : res, {})

const Commmunicator = () => {
  const { messages, setMessages } = useContext(SynchtonizerContext)
  const [originals, setOriginals] = useState<Array<Message>>(meses)

  useEffect(() => {
    const updatedIndex = messages.findIndex(({ updated }) => updated)
    if (updatedIndex > 0) {
      setMessages([...messages.slice(0, updatedIndex), { ...messages[updatedIndex], updated: false }])
      return
    }
    setOriginals([...messages, ...originals.slice(messages.length).reduce<Array<Message>>((res, original) => [...res, { ...original, completed: false }], [])])
  }, [messages])

  useEffect(() => {
    if (messages.some(({ completed }) => !completed)) return

    const unCompletedIndex = originals.findIndex(({ completed }) => !completed)
    const tailMessage = originals[unCompletedIndex - 1]
    if (tailMessage?.after) {
      const afterFunction = new Function('values', 'message', tailMessage.after)
      afterFunction(values(originals), tailMessage)
    }

    if (!originals[unCompletedIndex]) return
    const nextMessage = { ...originals[unCompletedIndex], completed: false }
    if (nextMessage.before) {
      const beforeFuction = new Function('values', 'message', nextMessage.before)
      beforeFuction(values(originals), nextMessage)
    }

    setMessages([...originals.slice(0, unCompletedIndex), nextMessage])
  }, [originals])

  return (
    <></>
  )
}

export default Commmunicator