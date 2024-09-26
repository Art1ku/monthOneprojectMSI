
import { FC } from 'react';
import { ReactNode } from 'react';
import {Box, Modal} from '@mui/material'

interface CustomModalProps{
    children: ReactNode
    open: boolean;
    handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  borderRadius: 3,
  bgcolor: 'rgb(218, 218, 218)',
  border: '1px solid rgb(255, 0, 60)',
  boxShadow: 24,
  p: 4,
};

export const CustomModal:FC<CustomModalProps> = (props) => {

  const {children, open, handleClose} = props

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}


