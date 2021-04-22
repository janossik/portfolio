import styled from "styled-components";
import Title from "components/atoms/Title/Title";
import Button from "components/atoms/Button/Button";
import { IBox } from "interface/interface";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Box = ({ title, children, url, linkText }: IBox) => {
  return (
    <Wrapper>
      <Title tag="h2" size="xl" primary>
        {title}
      </Title>
      <p>{children}</p>
      {url && (
        <Button href={url} as="a">
          {linkText}
        </Button>
      )}
    </Wrapper>
  );
};

export default Box;
