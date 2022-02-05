import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  height: 100vh;
`;

export const ListProducts = styled.div`
  height: 62%;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 22px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #717171;
    border-radius: 20px;
    border: 3px solid white;
  }
`;

export const CartMain = styled.div`
  width: 900px;
  height: 450px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  position: relative;
  border-radius: 15px;
`;

export const CartInfo = styled.div`
  display: flex;
  background: #ffffff;
  width: 800px;
  height: 19px;
  padding-left: 6px;
  padding-bottom: 30px;
  margin: 20px 0 0 50px;
`;

export const Produto = styled.span`
  width: 57px;
  height: 19px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #717171;
`;

export const Quantidade = styled.span`
  width: 83px;
  height: 19px;
  margin-left: 250px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #717171;
`;

export const Preço = styled.span`
  width: 41px;
  height: 19px;
  margin-left: 75px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #717171;
`;

export const Subtotal = styled.span`
  width: 59px;
  height: 19px;
  margin-left: 90px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #717171;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  margin: 40px 0 0 40px;
  padding: 0;
`;

export const ImageProduct = styled.img`
  display: flex;
  width: 70px;
  height: 70px;
  margin: 0;
`;

export const CartPokemonName = styled.span`
  margin-left: 45px;
  width: 99px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 125.2%;
  text-transform: capitalize;
  color: #292929;
`;
export const CartCounter = styled.div`
  display: inline-flex;
  margin-left: 90px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const SubProduct = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: #292929;
  font-size: 25px;
  padding: 0;
  cursor: pointer;
  transition: 0.4s;
`;

export const AddProduct = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: #292929;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  transition: 0.4s;
`;

export const ProductAmount = styled.span`
  display: flex;
  width: 50px;
  height: 36px;
  font-size: 15px;
  margin: 0 10px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #292929;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const ProductPrice = styled.span`
  width: 96px;
  height: 20px;
  margin-left: 70px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125.2%;
  color: #292929;
`;

export const ProductSubtotal = styled.span`
  width: 96px;
  height: 20px;
  margin-left: 35px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125.2%;
  color: #292929;
`;
export const RemoveProduct = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  margin-left: 45px;
  color: #e5e5e5;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  transition: 0.4s;
`;

export const HorizontalRow = styled.hr`
  width: 750px;
  height: 0px;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid #e5e5e5;
`;

export const TotalContainer = styled.div`
  height: 25px;
  justify-content: flex-end;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
export const CartTotal = styled.span`
  width: 174px;
  height: 25px;
  margin-right: 60px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 125.2%;
  display: flex;
  align-items: center;
  color: #292929;
`;

export const BackAndBuyButtonsContainer = styled.div`
  justify-content: space-between;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
export const BackHomeCartButton = styled.button`
  display: flex;
  width: 210px;
  height: 46px;
  margin-left: 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  justify-content: center;
  border: 1px solid #292929;
  box-sizing: border-box;
  border-radius: 6px;
  color: #717171;
`;
export const BuyCartButton = styled.button`
  display: flex;
  width: 210px;
  height: 46px;
  margin-right: 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #717171;
  color: #ffffff;
`;
