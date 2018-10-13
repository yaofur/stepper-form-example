import * as React from 'react'
import { FormData } from './TenantForm'

const PreviewView: React.SFC<{
  data: FormData
}> = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default PreviewView
