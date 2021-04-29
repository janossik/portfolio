import { ISign } from "types/types";

const Sign = ({ src, alt, url }: ISign) => (
  <a href={url} target="_blank" rel="noreferrer">
    <img src={src} alt={alt} width="60" height="60" />
  </a>
);
export default Sign;
