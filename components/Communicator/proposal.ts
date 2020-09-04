
export interface Proposal {
  human: boolean
  content: any
  delay?: number
  completed: boolean
  updated?: boolean
  before?: string
  after?: string
}
export interface Propsals extends Array<Proposal> { }

export const proposals: Propsals  = [
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