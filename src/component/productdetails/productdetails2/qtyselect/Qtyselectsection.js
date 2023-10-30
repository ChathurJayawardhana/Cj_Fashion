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
  return (
    <div>
        <Grid container>
           <Grid item>
           <Typography
              style={{fontSize:"30px",borderBottom:"1px solid black",float:"left"}}
             >01</Typography>
           </Grid>
           {qtybuttons.map((val,key)=>{
           return(
           <Grid item xs={1} md={2} key={key} style={{marginLeft:"15px"}}>
            
            <IconButton style={{
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
    </div>
  )
}
