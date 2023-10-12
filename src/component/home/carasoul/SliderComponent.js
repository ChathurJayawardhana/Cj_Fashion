import React from 'react'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SliderComponent({ImageUrl}) {
  return (
    <div>
      <div style={{position:"absolute",width:"100%",display:"flex"}}>
                            <div 
                            style={{marginLeft:"auto",
                            marginRight:"auto",
                            marginTop:"20%",

                        }}
                            >
                            <Typography 
                            component={Link}
                            to="/all-items"
                            style={{
                            color:"white",
                            cursor:"pointer",
                            fontSize:"30px",
                            border:"3px solid white",
                            borderRadius:"50px",
                            padding:"5px 20px",
                            textDecoration:"none",
                        }}
                        >Shop Now</Typography>
                            </div>
                        
                        </div>
                        
                     <img src={ImageUrl} style={{width:"100%",}}/>
    </div>
  )
}
