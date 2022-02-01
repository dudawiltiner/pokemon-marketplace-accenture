import Modal from 'react-modal';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io'

export const ModalContainer = styled(Modal)`
  display: flex;
  background-color: white;
  margin: 10% 30%;
  border-radius: 20px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DDDDDD;
  border-radius: 20px;`

export const CloseIcon = styled(IoMdClose)`
  color: white;
  width: 25px;
  height: 25px;`


export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 10px;`
