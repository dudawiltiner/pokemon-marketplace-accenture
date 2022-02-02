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
  background-color: gray;
  height: 100vh;
`

export const Text = styled.div`
  width: 60%;
  background-color: #DDDDDD;
  color: #717171;
  border-radius: 0px 20px 20px 0px;
  padding: 5%;
  position: relative;
  line-height: 17,53px;
  font-size: 16px;
  font-weight: 500;
`

export const PriceCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Paragraph = styled.p`
  margin-top: 10px;
`

export const Photo = styled.div`
  background-color: white;
  border-radius: 20px 0px 0px 20px;
  width: 40%;
  padding: 5%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`

export const CloseIcon = styled(IoMdClose)`
  color: white;
  width: 25px;
  height: 25px;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 10px;
`
export const AddCartButton = styled.button`
  background-color: #292929;
  color: white; 
  border-radius: 4px;
  padding: 10px;
  margin-top: 30px;
  `

export const PriceText = styled.p`
  color: #717171;
  height: 25px;
  width: 120px;
  left: 687px;
  top: 531px;
  border-radius: nullpx;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 30px;
  `

export const NamePokemon = styled.p`
  color: #717171;
  height: 23px;
  width: 64px;
  left: 690px;
  top: 217px;
  border-radius: nullpx;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 25px;
`