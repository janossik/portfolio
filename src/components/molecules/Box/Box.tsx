import Title from "components/atoms/Title/Title";
import Button from "components/atoms/Button/Button";
import { IBox } from "types/types";
import { Wrapper } from "./Box.styles";

const Box = ({ title, children, url, linkText }: IBox) => {
  return (
    <Wrapper>
      <Title tag="h2" size="xl" primary>
        {title}
      </Title>
      <p>{children}</p>
      {url && (
        <Button href={url} as="a" target="_blank" rel="noreferrer">
          {linkText}
        </Button>
      )}
    </Wrapper>
  );
};

export default Box;
