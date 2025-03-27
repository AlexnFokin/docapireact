declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
} 