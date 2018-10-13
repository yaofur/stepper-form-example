import * as React from 'react'
import { render } from 'react-dom'
import TenantForm, { FormData } from './components/TenantForm'
import PreviewData from './components/PreviewView'

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
    if (this.state.step === Step.FILLFORM) {
      return <TenantForm onSubmit={this.onSubmit} />
    } else if (this.state.step === Step.PREVIEW) {
      return <PreviewData data={this.state.formData} />
    }
  }
}


render(<App />, document.getElementById('app'))
