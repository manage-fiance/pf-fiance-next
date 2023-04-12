import { FieldForm, FormProps } from '@/models/auth';
import { Box, Button, TextField } from '@mui/material';
import React, { FormEventHandler, Fragment, Ref, forwardRef, memo } from 'react';

export default memo(function Form(props: FormProps) {
  const { action, fields, submitLabel, onValidate } = props;
  const handleSubmitForm = () => {
    onValidate('success')
  };
  return (
    <Box
      sx={{
        position: 'relative',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '10px'
      }}
    >
      <form onSubmit={handleSubmitForm}>
        <Box
          sx={{
            mb: 4,
            width: '100%',
          }}
        >
          {fields.map((item: FieldForm, index: number) => (
            <Fragment key={index}>
              <div>
                <TextField
                  id={item.key}
                  label={item.label}
                  variant='standard'
                  sx={{
                    width: '100%',
                  }}
                />
              </div>
            </Fragment>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleSubmitForm} variant='contained'>{submitLabel}</Button>
        </Box>
      </form>
    </Box>
  );
}
)