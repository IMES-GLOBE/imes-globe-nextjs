import { CSSProperties } from "react";

export interface LineProps {
  width?: number | string;
  lineHeight?: number | string;
  lineWidth?: number | string;
  lineTintColor?: string;
  leftEclips?: boolean;
  leftScale?: number;
  leftEclipsTintColor?: string;
  rightScale?: number;
  rightEclips?: boolean;
  rightEclipsTintColor?: string;
  containerClass?: string;
  style?: CSSProperties;
}