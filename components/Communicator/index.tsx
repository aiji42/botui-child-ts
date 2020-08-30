import React, { useContext, useEffect } from 'react'
import { SynchtonizerContext } from '../Synchronizer'

const meses = [
  { human: false, content: { type: 'string', props: { children: 'こんにちは' }, delay: 500 }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormName', props: { values: {familyName: 'あああ', familyNameKana: 'アアア' } } } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormBirthDay', props: {} } }, completed: false },
  { human: false, content: { type: 'string', props: { children: 'ありがとうございます。じゃあ住所を教えて下さい。' }, delay: 500 }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormAddress', props: {} } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormTel', props: {} } }, completed: false },
  { human: true, content: { type: 'form', props: { type: 'FormEmail', props: {} } }, completed: false },
]

const Commmunicator = () => {
  const { messages, setMessages } = useContext(SynchtonizerContext)
  useEffect(() => {
    if (messages.some(({ updated }) => updated)) {
      const updatedIndex = messages.findIndex(({ updated }) => updated)
      setMessages([...messages.slice(0, updatedIndex), { ...messages[updatedIndex], updated: false }])
      return
    }
    if (messages.some(({ completed }) => !completed)) return
    setMessages([...messages, meses[messages.length]])
  }, [messages])

  return (
    <></>
  )
}

export default Commmunicator