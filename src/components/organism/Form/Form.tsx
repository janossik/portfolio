import Button from "components/atoms/Button/Button";
import { Wrapper, Label, Input, Textarea } from "./Form.styles";

const Form = () => (
  <Wrapper name="contact" method="post" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Label>
      Twój e-mail:
      <Input type="email" name="email" placeholder="e-mail@xyz.com" />
    </Label>
    <Label>
      Twoja Wiadomość:
      <Textarea name="message" placeholder="W czym mogę Ci pomóc?"></Textarea>
    </Label>
    <Button type="submit">Wyślij</Button>
  </Wrapper>
);
export default Form;
