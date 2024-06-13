import { useEffect, useState } from "react";

function isStringOrArray(value: any): value is string | Array<string> {
  return typeof value === 'string' || Array.isArray(value);
}


function GradientCard(params: GradientCardProps) {

  const GradientColors = (array: any) => {
    if (isStringOrArray(array)) {
      if (typeof array === 'string') {
        return array;
      } else {
        const colorsString = array.join(', ');
        return colorsString;
      }
    } else {
      return "rgba(44,44,44,1), rgba(0,0,0,1)";
    }
  }
  return (
    <div style={{ width: params.width ?? 400, height: params.height ?? 200, background: `linear-gradient(to ${params.direction ?? "right"}, ${GradientColors(params.colors)})`, }}></div>
  );
}

export default GradientCard;