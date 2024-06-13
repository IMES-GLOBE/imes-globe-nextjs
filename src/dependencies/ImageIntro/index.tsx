import { useEffect, useState } from "react";
import styles from './styles.module.css'
import Image from 'next/image'


function ImageIntro (params: ImageIntroProps)  {
  const { image, alt } = params
  const { imageIntro, imageIntro_img, overlay } = styles;

  return (
    <div className={imageIntro}>
      <div className={overlay}></div>
      <Image
        src={image}
        alt={alt}
        className={imageIntro_img}
        width={1000}
        height={200}
      // priority
      />
    </div>
  )
}

export default ImageIntro;