import { Grid } from '@mui/material'
import React, { useState } from 'react'

const defaultSize = ["xs","s","M","L","xl"];

export default function ProductSize({avilableSize}) {

  const [finalSizeList,setFinalSizeList] = React.useState([]);

  React.useEffect(()=>{
    let tempArray = [];
    if(avilableSize){
      defaultSize.forEach((element) =>{
        if(avilableSize.includes(element)){
          tempArray.push({
            size:element,
            isAvailable:true,
          });
        }else{
          tempArray.push({
            size:element,
            isAvailable:false,
          });
        }
      });
      setFinalSizeList(tempArray);
    }
  },[])

  return (
    <div>
      <Grid container>
        <Grid item xs={1}></Grid>
        {finalSizeList.map((val,key)=>{
          return(
            <Grid key={key}item xs={2}>
            {val.size}
          </Grid> 
          );
        })}
       
        <Grid item xs={1}></Grid>

      </Grid>
    </div>
  )
}
