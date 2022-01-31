import tw from "tailwind-styled-components"
import { MdOutlineEdit } from 'react-icons/md';

export const Container = tw.div`
  bg-gray-200
  h-screen
  w-full
  flex
  justify-center
  items-center
`;

export const Content = tw.div`
  bg-white
  rounded-3xl
  shadow-md
  flex
  w-1/2
  h-1/2
`;

export const ContentImage = tw.div`
  flex
  justify-center
  items-center
  relative
  w-1/3
`;

export const ContentForms = tw.div`
  w-2/3
`;

export const Title = tw.p`
  text-3xl
  text-gray-700
  font-semibold
  mt-12
`;

export const Img = tw.img`
  ${props => props.w}
  ${props => props.hover}
  ${props => props.cursor}
  rounded-full
  border-2
  border-gray-500
`;

export const Forms = tw.form`
  flex
  flex-wrap
  justify-between
  max-w-xl
`;

export const Label = tw.label`
  mt-6
`;

export const Subtitle = tw.p`
  text-lg
  my-2
  text-gray-500
`;

export const Input = tw.input`
  bg-gray-100
  rounded-md
  p-4
  text-lg
  w-80
`;

export const Select = tw.select`
  bg-gray-100
  rounded-md
  cursor-pointer
  p-4
  text-lg
  w-52
`;

export const Buttons = tw.div`
  space-x-6
  mt-8
  flex
`;

export const Button = tw.button`
  text-xl
  font-semibold
  flex
  justify-center
  ${props => props.text}
  ${props => props.bg}
  ${props => props.bd}
  ${props => props.hover}
  border-2
  p-4
  w-36
  rounded-md
`;

export const ButotnIcon = tw.button`
  rounded-full
  bg-gray-500
  p-1
  absolute
  top-72
  mt-4
  right-20
`;

export const Icon = tw(MdOutlineEdit)`
  text-white
  w-6
  h-6
`;

export const ChooseImage = tw.div`
  absolute
  bg-gray-100
  shadow-md
  flex
  mt-80
  space-x-6
  p-4
  rounded-md
`;