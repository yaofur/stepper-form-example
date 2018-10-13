import * as React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'

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

const TenantForm: React.SFC<{
  onSubmit: (FormData) => void
  defaultValues?: FormData
}> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        salaryIndication: null
      }}
      onSubmit={onSubmit}
      render={(formikBag: FormikProps<FormData>) => (
        <Form>
          <Field
            name="fullName"
            render={({ field, form }: FieldProps<FormData>) => (
              <div>
                <input type="text" {...field} placeholder="Full Name" />
                {form.touched.fullName && form.errors.fullName && form.errors.fullName}
              </div>
            )}
          />
          <div>
            <Field name="email" placeholder="email" />
          </div>
          <div>
            <Field name="phoneNumber" placeholder="phone number" />
          </div>
          <div>
            <Field name="salaryIndication" placeholder="salary indication" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default TenantForm
