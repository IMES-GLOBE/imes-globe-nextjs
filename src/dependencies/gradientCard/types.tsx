interface GradientCard{
    colors: string | Array<string>,
    direction?: string,
}

interface GradientCardProps {
    colors: string | string[];
    direction?: string;
    height?: number | string;
    width?: number | string;
  }