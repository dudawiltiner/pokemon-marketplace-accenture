import styled, { css } from "styled-components";
import { FiUser } from 'react-icons/fi';
import { CgShoppingCart } from 'react-icons/cg';
import { MdInput } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 10px;
`;

export const LogoPoke = styled.img`
  width: 100px;
  height: 50px;
`;

const Icon = css`
  color: #717171;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const Icon1 = styled(CgShoppingCart)`
  ${Icon}
`;

export const Icon2 = styled(FiUser)`
  ${Icon}
`;

export const Icon3 = styled(MdInput)`
  ${Icon}
`;

export const ContainerIcons = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;
`;

export const CartIcon = styled(Link)`
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  display: flex;
  top: 0px; 
  right: 10px;
  justify-content: center;
  background-color: #404040;
  border-radius: 50%;
  height: 18px;
  width: 18px;
`;

export const TextCount = styled.p`
  color: white;
  font-size: 12px;
  padding-right: 1px;
  font-weight: 700;
`;