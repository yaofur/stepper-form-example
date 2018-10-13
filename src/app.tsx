import * as React from 'react'
import { render } from 'react-dom'

enum salaryIndication {
  SALARY_0_1K,
  SALARY_1K_2K,
  SALARY_2K_3K,
  SALARY_3K_4k,
  SALARY_4K_PLUS
}

interface FormData {
  fullName: string
  email: string
  phoneNumber: string
  salaryIndication: salaryIndication
}

function App () {
  return <p>hello home</p>
}

render(<App />, document.getElementById('app'))
