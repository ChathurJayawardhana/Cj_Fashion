import React from 'react'
import Commonlayout from '../common/Commonlayout'
import { Grid } from '@mui/material'
import ImageSlider from './left/ImageSlider'
import img01 from "../../images/productimages/img 01.jpg";
import img011 from "../../images/productimages/img 011.jpg";

export default function ProductDetails() {
  return (
    <div>
      <Commonlayout>
        <div style={{
          border:"4px solid teal",
          marginTop:"20px",
          borderRadius:"8px",
          marginLeft:"20px",
          marginRight:"20px"
          }}>
            <Grid container spacing={3} alignContent='center'>
                <Grid item xs={12} md={6} lg={4}>
                 <ImageSlider images = {[img01,img011]}/>
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
