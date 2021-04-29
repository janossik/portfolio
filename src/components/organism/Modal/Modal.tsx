import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CloseButton from 'components/atoms/CloseButton/CloseButton';
import { IModal } from 'types/types';
import { Wrapper, Background } from './Modal.styles';

const ModalContainer = document.createElement('div');

const Modal = ({ children, active, setActive }: IModal) => {
  useEffect(() => {
    document.body.prepend(ModalContainer);
    return () => {
      ModalContainer.remove();
    };
  }, []);

  const closeModal = () => {
    setActive(false);
  };

  return ReactDOM.createPortal(
    <>
      {active && (
        <Background onClick={closeModal}>
          <Wrapper>
            <CloseButton onClick={closeModal} />
            {children}
          </Wrapper>
        </Background>
      )}
    </>,
    ModalContainer
  );
};

export default Modal;
