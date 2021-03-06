import { Link } from "react-router-dom";
import tw from "tailwind-styled-components"

export const ChangePassword = tw(Link)`
  w-full
  flex
  pr-2
  justify-end
  underline
  text-gray-500
`;

export const ButtonIn = tw.button`
  w-full
  p-4
  text-lg
  flex
  justify-center
  font-semibold
  text-gray-600
  rounded-md
  ${props => props.margint}
  bg-gray-300
`;


export const Register = tw.div`
  text-center
  ${props => props.margint}
`;

export const QuestionRe = tw.p`
  text-lg
  text-gray-500
`;

export const ButtonRe = tw(Link)`
  text-gray-500
  font-semibold
  text-lg
`;