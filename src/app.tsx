import * as React from 'react'
import { render } from 'react-dom'
import TenantForm, { FormData } from './components/TenantForm'
import PreviewData from './components/PreviewView'
import styled from 'styled-components'

const PageContainer = styled.div`
  background: white;
  max-width: 750px;
  margin: 0 auto;
  padding: 48px;

  @media (max-width: 700px) {
    padding: 12px;
  }
`

enum Step {
  FILLFORM,
  PREVIEW
}

interface AppState {
  step: Step
  formData?: FormData
}

class App extends React.Component<{}> {
  readonly state: AppState = {
    step: Step.FILLFORM,
    formData: null
  }

  onSubmit = (data:FormData) => {
    this.setState(() => {
      return {
        step: Step.PREVIEW,
        formData: data
      }
    })
  }

  render () {
    let page
    if (this.state.step === Step.FILLFORM) {
      page = <TenantForm onSubmit={this.onSubmit} />
    } else if (this.state.step === Step.PREVIEW) {
      page = <PreviewData data={this.state.formData} />
    }

    return <PageContainer>
      {page}
    </PageContainer>
  }
}


render(<App />, document.getElementById('app'))
