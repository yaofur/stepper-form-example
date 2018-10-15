import styled from 'styled-components'

const bgColor = '#7ac456'

const Button = styled.button`
  color: #fff;
  background-color: ${bgColor};
  padding: 0.8rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2s;
  }

  &:hover,
  &:active {
    outline: none;
  }

  &[disabled] {
    background-color: #efefef;
    color: #989DA7;
    cursor: default;
  }

`

export default Button
