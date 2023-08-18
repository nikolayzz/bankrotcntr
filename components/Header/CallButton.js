import { Dialog, DialogActions, DialogContent } from '@mui/material';
import CallForm from '../Main/CallForm';
import CallFormButton from '../Main/CallFormButton';
import { useState } from 'react';

const CallButton = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className={`text-lg uppercase`}>
        Связаться с нами
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#4e0110',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            color: 'white',
          },
        }}
      >
        <DialogContent>
          <CallForm
            style={`bg-dots-red h-68 max-w-xs m-auto text-white p-7 text-center`}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'space-evenly', mb: '20px' }}
        >
          <button
            onClick={(event) => event.preventDefault()}
            type="submit"
            className="border rounded-md w-48 bg-[#fafafa] m-auto lg:m-0 text-[#4e0110] font-semibold p-2"
          >
            Отправить
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CallButton;
