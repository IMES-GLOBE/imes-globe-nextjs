import { useEffect, useState } from "react";
import styles from './styles.module.css'
import { LineProps } from './types'


function Line(params: LineProps) {
  const { 
    width, 
    lineHeight, lineWidth, lineTintColor, 
    rightEclips, rightScale, rightEclipsTintColor, 
    leftScale, leftEclips, leftEclipsTintColor, 
    containerClass, style 
  } = params;
  const { container, eclips, line } = styles
  return (
    <div className={`${container} ${containerClass}`} style={{...style, width: width ?? "50vw" }}>
      <div className={eclips} style={{ opacity: leftEclips ? 1 : 0, transform: `scale(${leftScale})`, backgroundColor: leftEclipsTintColor ?? "brown"  }}></div>
      <div className={line} style={{ height: lineHeight ?? 3, width: lineWidth ?? "100%", backgroundColor: lineTintColor ?? "brown" }}></div>
      <div className={eclips} style={{ opacity: rightEclips ? 1 : 0, transform: `scale(${rightScale})`, backgroundColor: rightEclipsTintColor ?? "brown"  }}></div>
    </div>
  );
}

export default Line;