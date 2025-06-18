import React from 'react' 
import { Image, ImageKitProvider } from '@imagekit/react'

const Picture = ({src, className, w, h, alt}) => {
  return (
    
    <div className=''>

      <Image
        urlEndpoint='https://ik.imagekit.io/6qhs8dhyhg/'
        src={src}
        className={className}
        width={w}
        h={h}
        alt={alt} 
        />
    </div>

    
  )
}

export default Picture
