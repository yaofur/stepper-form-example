import * as React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'
import InputField from './InputField'
// import Button from './Button'
import ProgressIndicator from './ProgressIndicator'
import * as yup from 'yup'

enum salaryIndication {
  SALARY_0_1K,
  SALARY_1K_2K,
  SALARY_2K_3K,
  SALARY_3K_4k,
  SALARY_4K_PLUS
}

export interface FormData {
  fullName: string
  email: string
  phoneNumber: string
  salaryIndication: salaryIndication
}

const salaryOptions = [{
  value: salaryIndication.SALARY_0_1K,
  label: '0 - 1.000'
}, {
  value: salaryIndication.SALARY_1K_2K,
  label: '1.000 - 2.000'
}, {
  value: salaryIndication.SALARY_2K_3K,
  label: '2.000 - 3.000'
}, {
  value: salaryIndication.SALARY_3K_4k,
  label: '2.000 - 3.000'
}, {
  value: salaryIndication.SALARY_4K_PLUS,
  label: 'Mehr als 4.000'
}]

const FormSchema = yup.object().shape({
  fullName: yup.string().min(3, 'Name too short').required('Please fillout the name'),
  email: yup.string().email('Invalid email').required('Please enter your email'),
  phoneNumber: yup.string().min(5, 'Invalid Phone Number').required('Invalid Phone Number'),
  salaryIndication: yup.number()
})

const TenantForm: React.SFC<{
  onSubmit: (FormData) => void
  defaultValues?: FormData
}> = ({ onSubmit }) => {
  const fields = [
    <InputField name="fullName" label="Full Name" />,
    <InputField type="email" name="email" label="Email Address" />,
    <InputField name="phoneNumber" label="Phone Number" />,
    <InputField type="select" options={salaryOptions} name="salaryIndication" label="Salary" />
  ]

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        salaryIndication: 0
      }}
      validationSchema={FormSchema}
      onSubmit={onSubmit}
      render={(formikBag: FormikProps<FormData>) => {
        const current: number = formikBag.status || 0
        const isLastStep: boolean = current >= (fields.length - 1)

        return (
          <Form>
            <ProgressIndicator total={fields.length} current={current + 1} />
            {React.cloneElement(fields[current], { isLastStep })}
          </Form>
        )
      }}
    />
  )
}

export default TenantForm
