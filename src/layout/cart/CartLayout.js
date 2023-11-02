import React from 'react'
import HeaderLayout from '../common/HeaderLayout'
import FooterLayout from '../common/FooterLayout'
import Commonlayout from '../common/Commonlayout'
import { Grid } from '@mui/material'
import Cartitemlist from './cartlayout/Cartitemlist'

export default function CartLayout() {
  return (
    <Commonlayout>
         <div style={{marginTop:"5%"}}>
          <Grid container justifyContent={'flex-end'}>
            <Grid item>
                <div>TOTAL PRISE</div>
            </Grid>

          </Grid>
             
             <Cartitemlist/>
   
            </div>
    </Commonlayout>
  
  )
}
