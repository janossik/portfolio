import styled from "styled-components";
import Box from "components/molecules/Box/Box";
import Button from "components/atoms/Button/Button";

const Wrapper = styled.article`
  display: flex;
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    flex-direction: column;
    max-width: 600px;
  }
`;

const Form = styled.form`
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
      <section>
        <Box title="Kontakt">
          Napisz do mnie, jeżeli chcesz nawiązać współpracę
        </Box>
        <div>e-mail: marcinczaniecki97@gmail.com</div>
      </section>
      <Form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Label>
          Twój e-mail:
          <Input type="email" name="email" placeholder="e-mail@xyz.com" />
        </Label>
        <Label>
          Twoja Wiadomość:
          <Textarea
            name="message"
            placeholder="W czym mogę Ci pomóc?"
          ></Textarea>
        </Label>
        <Button type="submit">Wyślij</Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;
