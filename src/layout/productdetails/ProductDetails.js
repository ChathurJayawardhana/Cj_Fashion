import React from 'react'
import Commonlayout from '../common/Commonlayout'
import { Grid } from '@mui/material'
import ImageSlider from './left/ImageSlider'

export default function ProductDetails() {
  return (
    <div>
      <Commonlayout>
        <div style={{border:"4px solid teal",marginTop:"3px",borderRadius:"8px"}}>
            <Grid container>
                <Grid item xs={12} md={6} lg={4}>
                 <ImageSlider/>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                         details
                   </Grid>
            </Grid>
        </div>
      </Commonlayout>
    </div>
  )
}
