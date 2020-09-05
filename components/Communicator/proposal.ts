import { Message as Proposal } from '@botui/types'

export interface Propsals extends Array<Proposal> { }

export const proposals: Propsals  = [
  { human: false, content: { type: 'string', props: { children: 'こんにちは' }, delay: 500 }, completed: false, updated: false, before: '', after: '' },
  {
    human: true,
    content: {
      type: 'form',
      props: {
        type: 'FormCustomInput',
        inputs: [{
          name: 'hoge', type: 'number', title: 'サンプル', placeholder: '0123',
          validation: { type: 'number', min: [4, '桁数が足りません'] },
        }],
        values: { hoge: '1234' },
        onSubmited: () => { }
      }
    },
    completed: false,
    updated: false,
    before: '',
    after: '',
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
  {
    human: true,
    content: {
      type: 'form',
      props: {
        type: 'FormName',
        values: { familyName: 'あああ', familyNameKana: 'アアア' },
        onSubmited: () => { }
      }
    },
    completed: false,
    updated: false,
    before: '',
    after: ''
  },
  { human: false, content: { type: 'string', props: { children: '' }, delay: 500 }, completed: false, updated: false, after: '', before: 'message.content.props.children = `${values.familyName}さんこんにちは！`; console.log(values)' },
  { human: true, content: { type: 'form', props: { type: 'FormAddress', values: {}, onSubmited: () => {} } }, completed: false, updated: false, after: '', before: '' },
  { human: true, content: { type: 'form', props: { type: 'FormTel', values: { tel: '08012341234' }, onSubmited: () => {} } }, completed: false, updated: false, after: '', before: '' },
  { human: true, content: { type: 'form', props: { type: 'FormEmail', values: {}, onSubmited: () => { } } }, completed: false, updated: false, after: '', before: '' },
  { human: true, content: { type: 'form', props: { type: 'FormBirthDay', values: {}, onSubmited: () => { } } }, completed: false, updated: false, after: '', before: '' },
]