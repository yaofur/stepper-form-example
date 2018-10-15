import * as React from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;
  position: relative;
  background: #efefef;

  width: 100%;
  height: 0.375rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #2e3642;
    transform: translateX(${props => props.value}%);
    transition: transform 1s cubic-bezier(0.17, 0.67, 0.19, 0.95);
  }
`

const Label = styled.span`
  font-size: 12px;
  color: #444;
`

const ProgressIndicator: React.SFC<{
  total?: number
  current: number
}> = ({ total, current }) => {
  return (
    <div>
        <Label>
          {current} / {total}
        </Label>
      <Progress value={Math.round((current / total) * 100)} />
    </div>
  )
}

export default ProgressIndicator
