import { Link } from "react-router-dom";
import tw from "tailwind-styled-components"

export const Select = tw.select`
  ml-4
  w-40
  rounded-md
  bg-gray-200
  p-2
  cursor-pointer
`;

export const Choose = tw.div`
  mt-10
  space-x-14
  flex
`;

export const ButtonLo = tw(Link)`
  text-gray-500
  font-semibold
  w-full
  text-lg
  text-center
  mt-6
`;