import { AddShoppingCart } from '@material-ui/icons'
import { Button } from '@mui/material'
import React from 'react'
import SnackbarMassage from '../../common/snackBar/SnackbarMassage'

export default function AddtoCart(productName) {
  const [changed,setChanged] = React.useState(0);

  const handlesnackChange=() =>{
      setChanged(changed+1);
  };
  return (
    <div>
      <Button variant='contained'
      onClick={handlesnackChange}
       startIcon={<AddShoppingCart/>}
       style={{
        backgroundColor:"teal",
        borderRadius:"15px",
        padding:"8px 50px"
       }}
      >Add To Cart</Button>

      <SnackbarMassage changed={changed} message={`${productName} added`}/>
    </div>
  )
}
