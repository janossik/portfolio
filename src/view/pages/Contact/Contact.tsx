import styled from "styled-components";
import Box from "components/molecules/Box/Box";
import Button from "components/atoms/Button/Button";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px 30px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;

const Textarea = styled.textarea`
  height: 200px;
  padding: 20px 30px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Box title="Contact">
        Napisz do mnie, jeżeli chcesz nawiązać współpracę
      </Box>
      <div>e-mail: marcinczaniecki97@gmail.com</div>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Contact;
