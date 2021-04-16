import styled from "styled-components";

const StyledTitle = styled.h2<{
  weight?: "light" | "regular" | "semibold" | "bold";
}>`
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.bold};
  margin: 0;
`;

const Title = ({
  tag,
  children,
  weight,
}: {
  tag: "h1" | "h2" | "h3" | "h4";
  children: string;
  weight?: "light" | "regular" | "semibold" | "bold";
}) => {
  return (
    <StyledTitle weight={weight} as={tag}>
      {children}
    </StyledTitle>
  );
};

export default Title;
