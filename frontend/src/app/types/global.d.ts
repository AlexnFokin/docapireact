declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import { FC, SVGProps } from "react";

  const content: FC<SVGProps<SVGSVGElement>>;
  
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
} 

declare const __IS_DEV__: boolean;