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
      <button
        onClick={handleClickOpen}
        className=" text-[#fafafa] uppercase text-lg py-2 px-4"
      >
        Перезвоните мне
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            background: '#4e0110',
            color: 'white',
          },
        }}
      >
        {/* <DialogTitle>ОН-ЛАЙН ЗАПИСЬ</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText color="white">
            Запишитесь на консультацию
          </DialogContentText> */}
          <CallForm
            style={`bg-[#4e0110] h-68 max-w-xs m-auto text-white p-7 text-center`}
          />
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'space-evenly', mb: '20px' }}
        >
          <button
            className="bg-white text-[#4A0A09] h-8 p-5 rounded-md flex justify-center items-center font-semibold w-28"
            onClick={handleClose}
          >
            Отмена
          </button>
          <button
            className="bg-white text-[#4A0A09] h-8 p-5 rounded-md flex justify-center items-center font-semibold w-32"
            onClick={handleClose}
          >
            <CallFormButton />
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CallButton;
