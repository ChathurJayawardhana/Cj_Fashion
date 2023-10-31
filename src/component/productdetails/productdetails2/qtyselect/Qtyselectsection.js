import React from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import { Add as AddIcon,Remove as RemoveIcon} from '@material-ui/icons'

const qtybuttons = [
    {
        type:"add",
        icon:<AddIcon/>
    },
    {
        type:"remove",
        icon:<RemoveIcon/>
    }

]

export default function Qtyselectsection() {

const [qty,setQty] = React.useState(1);

const handleqtyChange = (type) =>{
   if("add" === type && qty+1 < 11) {
       setQty(qty+1);
   }else if("remove" === type && qty-1>0){
    setQty(qty-1);
   }
}

  return (
    
        <Grid container>
           <Grid item>
           <Typography
              style={{fontSize:"30px",borderBottom:"1px solid black",float:"left"}}
             >
              {qty < 10 ? "0" + qty : qty}
             </Typography>
           </Grid>
           {qtybuttons.map((val,key)=>{
           return(
           <Grid item xs={1} md={2} key={key} style={{marginLeft:"15px"}}>
            
            <IconButton 
            onClick={()=>handleqtyChange(val.type)}
            style={{
                border:"1px solid grey",
                borderRadius:"10px",
                height:"45px",
                margin:"5px",
                width:"40px"
        
             }}>
               {val.icon}
             </IconButton>
           </Grid>
               )
            })}
        </Grid>
    
  )
}
