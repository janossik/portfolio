import styled from "styled-components";

const StyledTitle = styled.h2<{
  weight?: "light" | "regular" | "semibold" | "bold";
  primary?: boolean;
}>`
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.bold};
  margin: 0;
  color: ${({ theme, primary }) => primary && theme.color.primary};
`;

const Title = ({
  tag,
  children,
  weight,
  primary,
}: {
  tag: "h1" | "h2" | "h3" | "h4";
  children: string;
  weight?: "light" | "regular" | "semibold" | "bold";
  primary?: boolean;
}) => {
  return (
    <StyledTitle weight={weight} primary={primary} as={tag}>
      {children}
    </StyledTitle>
  );
};

export default Title;
