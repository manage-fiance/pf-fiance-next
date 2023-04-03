import { FieldForm, FormProps } from '@/models/auth'
import { Button } from '@mui/material'
import React, { Fragment } from 'react'




export default function Form(props: FormProps) {
  const {
    action,
    fields,
    submitLabel
  } = props

  const handleSubmitForm = () => {
    
  }
  return (
    <div>
      <form action={action} onSubmit={handleSubmitForm}>
      {
        fields.map((item: FieldForm, index: number) => <Fragment key={index}>
          <div>
            <label htmlFor={item.key}>{item.label}</label>
          </div>
          <div>
            <input type='text' name={item.key} id={item.key}/>
          </div>
        </Fragment>)
      }
      <Button variant='contained'>{submitLabel}</Button>
    </form>
    </div>
  )
}
