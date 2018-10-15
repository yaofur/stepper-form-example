import * as React from 'react'
import { Field, FieldProps } from 'formik'
import styled from 'styled-components'
import Button from './Button'

const Input = styled.input`
  border: 1px solid #fff;
  font-size: 1.2rem;
  padding: 0.6rem;
  padding-left: 0;
  background: #0000;
  border: none;
  border-bottom: 2px solid #444;
  transition: 0.2s;
  width: calc(100% - 0.6rem);
  max-width: 350px;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &:focus + label {
    top: -0.8rem;
    font-size: 0.7rem;
  }
`

const Label = styled.label`
  display: block;
  opacity: 0.5;
  pointer-events: none;
`

const ErrorMessage = styled.div`
  color: #ca5037;
`

const FieldWrapper = styled.div`
  position: relative;
  margin: 1.5rem 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TextFieldLabel: any = styled(Label)`
  position: absolute;
  left: 0;
  transition: 0.2s ease-out;
  will-change: top, font-size;
  top: ${(props: any) => (props.hasValue ? '-0.8rem' : '0.8rem')};
  font-size: ${(props: any) => (props.hasValue ? '0.7rem' : '1rem')};
`

const TextField: React.SFC<any> = ({ type, label, field, name }) => {
  return (
    <FieldWrapper>
      <Input type={type} {...field} />
      <TextFieldLabel htmlFor={name} hasValue={!!field.value}>
        {label}
      </TextFieldLabel>
    </FieldWrapper>
  )
}

const Selector: React.SFC<any> = ({ options, name, label }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Field component="select" name={name}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Field>
    </FieldWrapper>
  )
}

interface Option {
  value
  label
}

const InputField: React.SFC<{
  name: string
  label: string
  type?: string
  isLastStep?: boolean
  options?: Option[]
}> = ({ name, label, type = 'text', isLastStep, options }) => {
  return (
    <Field
      name={name}
      render={({ field, form }: FieldProps<FormData>) => {
        return (
          <Wrapper>
            {type === 'select' ? (
              <Selector name={name} options={options} label={label} />
            ) : (
              <TextField type={type} label={label} field={field} name={name} />
            )}

            {form.touched[name] &&
              form.errors[name] && (
                <ErrorMessage data-test="error-message">{form.errors[name]}</ErrorMessage>
              )}

            <Button
              disabled={type === 'select' ? false : !form.values[name] || form.errors[name]}
              type="button"
              onClick={() => {
                if (form.errors[name]) {
                  return
                }

                if (isLastStep) {
                  form.handleSubmit()
                } else {
                  form.setStatus((form.status || 0) + 1)
                }
              }}
            >
              {isLastStep ? 'Submit' : 'Next Step'}
            </Button>
          </Wrapper>
        )
      }}
    />
  )
}

export default InputField
