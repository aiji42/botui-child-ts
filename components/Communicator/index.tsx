import React, { useContext, useEffect, useReducer } from 'react'
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
  { human: true, content: { type: 'form', props: { type: 'FormName', values: { familyName: 'あああ', familyNameKana: 'アアア' } } }, completed: false, after: 'message.content.props.values.firstName = "愛史2"' },
  { human: false, content: { type: 'string', props: { children: '' }, delay: 500 }, completed: false, before: 'message.content.props.children = `${values.familyName}さんこんにちは！`; console.log(values)' },
  { human: true, content: { type: 'form', props: { type: 'FormAddress' } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormTel', values: { tel: '08012341234' } } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormEmail' } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormBirthDay' } }, completed: false },
]

const values = (messages: Array<Message>): { [x: string]: any } => messages.reduce((res, message) => message.content.props?.values ? { ...res, ...message.content.props.values} : res, {})

const Commmunicator = () => {
  const { messages, setMessages } = useContext(SynchtonizerContext)

  useEffect(() => {
    messages.forEach((message, index) => meses[index] = message)

    if (messages.some(({ updated }) => updated)) {
      const updatedIndex = messages.findIndex(({ updated }) => updated)
      setMessages([...messages.slice(0, updatedIndex), { ...messages[updatedIndex], updated: false }])
      return
    }
    if (messages.some(({ completed }) => !completed)) return

    const last = messages.slice(-1)[0]
    if (last?.after) {
      const afterFunction = new Function('values', 'message', last.after)
      afterFunction(values(messages), last)
    }
    const next = meses[messages.length]
    if (next?.before) {
      const beforeFuction = new Function('values', 'message', next.before)
      beforeFuction(values(messages), next)
    }
    setMessages([...messages, next])
  }, [messages])

  return (
    <></>
  )
}

export default Commmunicator