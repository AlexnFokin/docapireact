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

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

declare const __IS_DEV__: boolean;
declare const __API__: string;