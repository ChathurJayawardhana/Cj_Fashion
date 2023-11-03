import React from 'react'
import { Button } from '@mui/material'
import { DeleteForever } from '@material-ui/icons'

export default function Removebutton() {
  return (
   
       <Button variant='contained' style={{
        borderRadius:"25px",
        marginTop:"20px",
        
       }}
        startIcon = {<DeleteForever/>}
       >Remove</Button>
   
  )
}
