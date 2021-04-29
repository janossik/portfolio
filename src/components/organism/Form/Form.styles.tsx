import styled from "styled-components";
export const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 600px;
    gap: 10px;
  }
  @media print {
    display: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    * {
      margin-bottom: 5px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px 30px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;

export const Textarea = styled.textarea`
  height: 200px;
  padding: 20px 30px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;
