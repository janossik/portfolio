import styled from "styled-components";
import Box from "components/molecules/Box/Box";
import Form from "components/organism/Form/Form";

const Wrapper = styled.article`
  display: flex;
  gap: 30px;
  @media screen and (max-width: ${({ theme }) => theme.screenSize.tablet}) {
    flex-direction: column;
    max-width: 600px;
    * {
      margin-bottom: 5px;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper id="kontakt">
      <section>
        <Box title="Kontakt">
          Napisz do mnie, jeżeli chcesz nawiązać współpracę
        </Box>
        <div>e-mail: marcinczaniecki97@gmail.com</div>
      </section>
      <Form />
    </Wrapper>
  );
};

export default Contact;
