import styled from "styled-components";

const StyledTitle = styled.h2<{
  size?: "s" | "m" | "l" | "xl";
  weight?: "light" | "regular" | "semibold" | "bold";
  primary?: boolean;
}>`
  font-size: ${({ theme, size }) => size && theme.font.size[size]};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : theme.font.weight.bold};
  margin: 0;
  color: ${({ theme, primary }) => primary && theme.color.primary};
`;

const Title = ({
  tag,
  children,
  weight,
  size,
  primary,
}: {
  tag: "h1" | "h2" | "h3" | "h4";
  primary?: boolean;
  children: string;
  weight?: "light" | "regular" | "semibold" | "bold";
  size?: "s" | "m" | "l" | "xl";
}) => {
  return (
    <StyledTitle weight={weight} size={size} primary={primary} as={tag}>
      {children}
    </StyledTitle>
  );
};

export default Title;
