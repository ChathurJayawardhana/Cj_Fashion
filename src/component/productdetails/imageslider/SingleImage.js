import React from 'react'
import ReactImageMagnify from 'react-image-magnify'


export default function SingleImage({smallImage,largeImage}) {
  return (
    <div>
      <ReactImageMagnify 
      
      enlargedImagePosition='over'
      isHintEnabled
      {...{
       
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: smallImage
    },
    largeImage: {
        src: largeImage,
        width: 1200,
        height: 1500
    }
}} />
    </div>
  )
}
