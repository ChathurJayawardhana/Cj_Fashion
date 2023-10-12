import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AllItemImage from "../../images/home/buttons/All.jpg";
import NewItems from "../../images/home/buttons/New.jpg";
import Trending from "../../images/home/buttons/Trending.jpg";
import TopImages from "../../images/home/buttons/Top.jpg";
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const images = [
  {
    url: AllItemImage,
    title: 'All Items',
    width: '20%',
  },
  {
    url: NewItems,
    title: 'New Items',
    width: '20%',
  },
  {
    url: Trending,
    title: 'Trending Items',
    width: '20%',
  },
  {
    url: TopImages,
    title: 'Top Itemas',
    width: '20%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonlistLayout() {

  const maxwidth1024 = useMediaQuery("(max-width:1024px)");
  const maxwidth653 = useMediaQuery("(max-width:653px)");
  return (
    <Box sx={{ display: 'flex', 
    flexWrap: 'wrap',
    minWidth: 300,
     width: '100%',
     justifyContent:'center',
     }}>
      {images.map((image,key) => (
        <ImageButton
          component={Link}
          to='/all-items'
          focusRipple
          key={key}
          style={{
            width:maxwidth653 ? "100%" : maxwidth1024 ? "277px" : image.width,
            margin:"2%"
          }}
        >
          <ImageSrc 
          style={{ backgroundImage: `url(${image.url})`,
          borderRadius:"25px",
          border:"5px solid white" }} />
          <ImageBackdrop 
          className="MuiImageBackdrop-root" 
          style={{borderRadius:"25px"}}
          />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
              style={{borderRadius:"120px"}}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}