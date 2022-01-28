import { Link } from "react-router-dom";
import tw from "tailwind-styled-components"

export const Main = tw.main`
  flex
`;

export const Bg = tw.img`
  w-1/2
  h-screen
`;

export const Container = tw.div`
  w-1/2
  flex
  items-center
  justify-center
`;

export const Content = tw.div`
  w-full
  flex
  flex-col
  ml-44
  space-y-14
`;

export const Logo = tw.img`
  w-44
  mb-10
`;

export const Title = tw.p`
  text-5xl
  font-semibold
`;

export const Forms = tw.form`
  w-2/3
  flex
  flex-col
`;

export const Input = tw.input`
  border-2
  border-gray-400
  rounded-md
  p-4
  w-full
`;

export const Label = tw.label`
  relative
  text-lg
  mt-12
  w-full
`;

export const Subtitle = tw.p`
  absolute
  float-left
  p-1
  bg-white
  -top-4
  left-6
`;

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
  font-medium
  text-gray-600
  rounded-md
  mt-6
  bg-gray-300
`;


export const Register = tw.div`
  text-center
  mt-32
`;

export const ButtonRe = tw.button`
  text-gray-600
  font-medium
`;