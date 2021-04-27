import { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseButton from "components/atoms/CloseButton/CloseButton";
import { IModal } from "types/types";
import { Wrapper, Background } from "./Modal.styles";

const Modal = ({ children, active, setActive }: IModal) => {
  const ModalContainer = document.createElement("div");
  useEffect(() => {
    document.body.prepend(ModalContainer);
    return () => {
      ModalContainer.remove();
    };
  });

  return ReactDOM.createPortal(
    <>
      {active && (
        <Background onClick={() => setActive(false)}>
          <Wrapper>
            <CloseButton onClick={() => setActive(false)} />
            {children}
          </Wrapper>
        </Background>
      )}
    </>,
    ModalContainer
  );
};

export default Modal;
