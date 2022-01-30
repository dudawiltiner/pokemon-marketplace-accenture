import tw from "tailwind-styled-components"

export const Container = tw.div`
`;

export const Message = tw.p`
  ${props => props.color}
  -mb-6
`;