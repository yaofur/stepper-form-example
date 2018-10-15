import * as React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import App from '../components/App'

function onChange(node: ReactWrapper, name, value) {
  node.simulate('focus')
  node.simulate('change', { target: { name, value } })
  node.simulate('blur')
}

describe('HomeApp', () => {
  it('should work correctly', async () => {
    const node = mount(<App />)

    const values = [
      {
        name: 'fullName',
        value: 'Keith Yao'
      },
      {
        name: 'email',
        value: 'test@example.com'
      },
      {
        name: 'phoneNumber',
        value: '+491683450567'
      },
      {
        nodeName: 'select',
        name: 'salaryIndication',
        value: 1
      }
    ]

    for (let { nodeName, name, value } of values) {
      const input = node.find(`${nodeName ? nodeName : 'input'}[name="${name}"]`)
      expect(input.exists()).toBe(true)
      onChange(input, name, value)
      node.find('button[type="button"]').simulate('click')
    }

    expect(node.find('Formik').state()).toMatchSnapshot()

    // need submit by hand in Enzyme here
    node.find('form').simulate('submit')

    // after submit, need wait for re-render
    await new Promise(resolve => window.setTimeout(resolve, 0))
    
    expect(node).toMatchSnapshot()
  })
})
