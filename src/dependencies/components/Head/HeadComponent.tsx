import React from 'react';
import './bootstrap.min.css'
import Head from 'next/head';  // Import Head component for updating the document head

const HeadComponent: React.FC = (params:any) => {
  const {title} = params;
  return (
    <>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      {/* <meta name="theme-color" content="#000000" /> */}
      {/* <meta name="description" content="wellcom the Logic church" /> */}

      {/* <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css" /> */}

      {/* <link rel="stylesheet" href="/assets/css/untitled.css" /> */}
      {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
      {/* <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/fonts/material-icons.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/animate.css" /> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/css/lightbox.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" /> */}

      {/* <link rel="manifest" href="/manifest.json" /> */}

      <title>{title ? title : "IMES GLOBE"}</title>
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Travel.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/Okana-Bold.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/Okana-Black.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Allura-Regular.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Sketch.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Admiration-Pains.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/edo.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/The-Bully.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Silent-Asia.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Pacifico-Regular.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/DancingScript-VariableFont_wght.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Borel-Regular.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Lugrasimo-Regular.ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/ttf" href="/assets/fonts/Lumanosimo-Regular.ttf" crossOrigin="anonymous" />
      {/* <link rel="stylesheet" type="text/css" href="/assets/styles.css" /> */}
    </>
  );
};

export default HeadComponent;