import React from 'react'
import { Button } from '@mui/material'
import { DeleteForever } from '@material-ui/icons'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function  Removebutton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       <Button variant='contained' style={{
        borderRadius:"25px",
        marginTop:"20px",
        
       }}
       onClick={handleClickOpen}
        startIcon = {<DeleteForever/>}
       >Remove</Button>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANSEL</Button>
          <Button onClick={handleClose} variant='contained' autoFocus>
           REMOVE
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
