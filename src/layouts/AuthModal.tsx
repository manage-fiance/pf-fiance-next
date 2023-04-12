import Form from '@/componets/shared/Form'
import { FormProps } from '@/models/auth'
import { Box, Modal, Typography } from '@mui/material'
import React, { Fragment, useRef } from 'react'

type ModalProps = {
    open: boolean,
    title: string,
    closeModal?: (arg: boolean) => void,
    formProps: FormProps
    
}

export default function AuthModal({...props}: ModalProps) {
    const handleCloseModal = () => {        
        props.closeModal && props.closeModal(false)
    }
    return (
        <div>
            <Modal open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1
                }}
            >
                <Box>
                    <Form {...props.formProps}/>
                </Box>
            </Modal>
        </div>
    )
}
