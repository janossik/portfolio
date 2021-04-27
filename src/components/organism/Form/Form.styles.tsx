import styled from "styled-components";
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    width: 600px;
  }
  @media print {
    display: none;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
