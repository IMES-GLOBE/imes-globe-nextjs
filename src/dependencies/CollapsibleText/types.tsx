
interface TextRevealProps {
  title?:string;
  body?: body[];
  // body?: Array<BodyItem>;
  }

  type body = {
    type?: string;
    value?: string,
    children?: body[],
  }

  type BodyItem = {
    data: {
      type_: "image" | "list" | "listChild" | "icon" | "div" | "link" | "text";
      style?: string;
      class?: string;
      url?: string;
      t?: string;
      data?: BodyItem[];
      children?: BodyItem[];
    }[];
    className?: string;
  };


interface headingText{
  text?: any;
  className?: any;
}