import styled from "styled-components";
import Box from "components/molecules/Box/Box";
//import Button from "components/atoms/Button/Button";
import NetlifyForm from "react-netlify-form";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
/* 
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
`; */

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Box title="Contact">
        Napisz do mnie, jeżeli chcesz nawiązać współpracę
      </Box>
      <div>e-mail: marcinczaniecki97@gmail.com</div>
      <NetlifyForm name="Contact Form">
        {({ loading, error, success }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div>Your information was not sent. Please try again later.</div>
            )}
            {success && <div>Thank you for contacting us!</div>}
            {!loading && !success && (
              <div>
                <input type="text" name="Name" required />
                <textarea name="Message" required />
                <button>Submit</button>
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
    </Wrapper>
  );
};

export default Contact;
