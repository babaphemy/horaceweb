import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Loginbox from './Loginbox';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface Props {
  open: boolean;
  _open: () => void;
}
const AuthModal: React.FC<Props> = ({ open, _open }: Props): ReactElement => {
  console.log(open, ' whas');
  return (
    <Modal
      open={open}
      onClose={_open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Loginbox />
        <Button onClick={_open}>Close</Button>
      </Box>
    </Modal>
  );
};

export default AuthModal;
