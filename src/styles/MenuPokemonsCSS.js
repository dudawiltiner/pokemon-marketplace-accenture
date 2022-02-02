import styled from "styled-components";
import {MdCatchingPokemon} from "react-icons/md"

export const ContainerPokemon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1350px;
  height: auto;
  margin-top: 100px;
`;

export const CardPokemon = styled.li`
  display: table;
  justify-content: center;
  float: left;
  margin: 35px 0px 35px 70px;
  width: 250px;
  height: 415px;
  background: #FFFFFF;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  &:hover{top:-10px;box-shadow:2px 2px 2px 2px #666}
`;

export const Picture = styled.img`
  width: 160px;
  height: 160px;
  margin: 30px 45px;
`;

export const Name = styled.div`
  color: #717171;
  font-size: 20px;
  font-weight: 600;
  margin: 5px 45px 14px 45px;
`;

export const Type = styled.div`
  color: #717171;
  font-size: 15px;
  margin: 5px 45px;
`;

export const Detail = styled.div`
  color: #717171;
  font-size: 15px;
  font-weight: 600;
  margin: 5px 45px 14px 45px;
  cursor: pointer;
`;

export const Price = styled.div`
  color: #717171;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 45px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 180px;
  color: ${props => !props.color ? "white" : props.color};
  font-weight: 600;
  font-size: ${props => !props.font ? "16px" : props.font};
  background: ${props => props.bgcolor};
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 35px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Title = styled.p`
  color: #717171;
  font-weight: 600;
  font-size: 18px;
`;

export const Icon1 = styled(MdCatchingPokemon)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Icon2 = styled(MdCatchingPokemon)`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;