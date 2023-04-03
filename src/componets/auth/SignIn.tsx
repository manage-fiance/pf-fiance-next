import React from 'react'
import Form from '../shared/Form'
import { FieldForm } from '@/models/auth'

export default function SignIn() {
  const fields: Array<FieldForm> = [
    {
      key: 'email',
      label: 'Email',
      rule: [
        {
          required: true
        }
      ]
    }
  ]

  const handleValidateForm = () => {
    
  }
  return (
    <div>
      <Form action='/auth/signin' fields={fields} onValidate={handleValidateForm}/>
    </div>
  )
}
