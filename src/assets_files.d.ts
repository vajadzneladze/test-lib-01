declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<HTMLDivElement>>;
    export default content;
  }