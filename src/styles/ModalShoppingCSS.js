import Modal from 'react-modal';
import { BsCartCheck } from 'react-icons/bs';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom';

export const ModalContainer = styled(Modal)`
  //display: flex;
  background-color: white;
  margin: 10% 37%;
  padding-top: 10px;
  border-radius: 20px;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 100vh;`

export const CloseIcon = styled(IoMdClose)`
  color: gray;
  width: 25px;
  height: 25px;`


export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 10px;`

export const CartIcon = styled(BsCartCheck)`
  color: gray;
  width: 40px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;`

export const Text1 = styled.p`
  color: #292929;
  font-weight: 600;
  text-align: center;
  font-size: 22px;
  margin-top: 20px;`

export const Text2 = styled.p`
  color: #717171;
  text-align: center;
  font-size: 15px;
  width: 230px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;`

export const HomeButton = styled(Link)`
  background-color: #404040;
  color: white; 
  border-radius: 4px;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;`

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  `
  