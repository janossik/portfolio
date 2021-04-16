import styled from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import TopBar from "components/organism/TopBar/TopBar";
import { IComponentWithChildren } from "interface/interface";

const Wrapper = styled.main`
  padding-top: 0px;
`;

const MainTemplate = ({ children }: IComponentWithChildren) => {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MainTemplate;
