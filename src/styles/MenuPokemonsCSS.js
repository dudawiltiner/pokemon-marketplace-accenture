import styled from "styled-components";

export const ContainerPokemon = styled.div`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  width: 1350px;
  height: auto;
  margin-top: 250px;
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
`;

export const Picture = styled.img`
  width: 160px;
  height: 160px;
  margin: 30px 45px;

`;

export const Name = styled.div`
  color: #717171;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 45px;
`;

export const Type = styled.div`
  color: #717171;
  font-size: 12px;
  font-weight: 400;
  margin: 5px 45px;
`;

export const Detail = styled.div`
  color: #717171;
  font-size: 14px;
  font-weight: 400;
  margin: 5px 45px;
`;

export const Price = styled.div`
  color: #717171;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 45px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 180px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  background: #717171;
  border: none;
  border-radius: 3px;
  margin-top: 20px;
  margin-left: 35px;
  cursor: pointer;
`;