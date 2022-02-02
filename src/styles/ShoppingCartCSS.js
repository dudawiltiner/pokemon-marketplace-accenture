import  styled  from 'styled-components'; 


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #E5E5E5;
  height: 100vw;
`;

export const CartMain = styled.div`
  width:900px;
  height: 500px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background: #FFFFFF;
  border-radius: 15px;

  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const CartInfo = styled.div`
  display: flex;

  width: 800px;
  height: 19px;
  margin: 20px 0 0 40px;
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
  margin-left: 285px;

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

  margin: 50px 0 0 40px;  
  
  padding: 0;

  `

  export const ImageProduct = styled.img`
  display: flex;
  width: 87px;
  height: 87px;
  margin: 0;

`;

export const CartPokemonName = styled.span`
  margin-left: 45px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 125.2%;
  /* identical to box height, or 23px */


  color: #292929;

`
export const CartCounter = styled.div`
  display: inline-flex  ;
  margin-left: 90px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`

export const SubProduct = styled.button`
  appearance:none;
  border: none;
  outline: none;
  background: none;

  color: #292929;

  font-size: 25px;
  padding:0;
  cursor: pointer;
  transition: 0.4s;
`


export const AddProduct = styled.button`
  appearance:none;
  border: none;
  outline: none;
  background: none;

  color: #292929;

  font-size: 20px;
  padding:0;
  cursor: pointer;
  transition: 0.4s;
`

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
`

export const ProductPrice = styled.span`
  width: 96px;
  height: 20px;
  margin-left: 70px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 125.2%;
/* identical to box height, or 20px */


color: #292929;
`

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
`
export const RemoveProduct = styled.button`
  appearance:none;
  border: none;
  outline: none;
  background: none;

  margin-left: 45px;

  color: #E5E5E5;

  font-size: 20px;
  padding:0;
  cursor: pointer;
  transition: 0.4s;
`

export const HorizontalRow = styled.hr`
  width: 750px;
  height: 0px;
  margin-left: 20px;
  margin-top: 20px;

  border: 1px solid #E5E5E5;
`

export const TotalContainer = styled.div`
  height: 25px;
  justify-content: flex-end;

  margin-top: 30px;


  display: flex;
  align-items: center;

`
export const CartTotal = styled.span`
  width: 174px;
  height: 25px;

  margin-right: 60px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 125.2%;
  /* identical to box height, or 25px */

  display: flex;
  align-items: center;

  color: #292929;
`

export const BackAndBuyButtonsContainer = styled.footer`
  justify-content: space-between;

  margin-top: 30px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

`
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
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #292929;
  box-sizing: border-box;
  border-radius: 6px;

  color: #717171;

`
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

  /* border: 1px solid #292929;
  box-sizing: border-box;
   */
  border-radius: 6px;
  background-color: #717171;
  color: #FFFFFF;

`
