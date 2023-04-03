import { Box, Modal, Typography } from '@mui/material'
import React, { Fragment } from 'react'

type ModalProps = {
    open: boolean,
    title: string,
    children: React.ReactNode,
    closeModal?: (arg: boolean) => void
}

export default function AuthModal(props: ModalProps) {
    const handleCloseModal = () => {        
        props.closeModal && props.closeModal(false)
    }
    return (
        <div>
            <Modal open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleCloseModal}
            >
                <Box>
                    {props.children}
                </Box>
            </Modal>
        </div>
    )
}
