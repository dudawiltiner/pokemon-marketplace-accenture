import tw from "tailwind-styled-components"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

export const AlertConatiner = tw.div`
  absolute
  bottom-20
  px-4
  py-3
  text-red-900
  bg-red-100
  border-t-4
  border-red-500
  rounded-md
  shadow-md
  right-4
`;

export const Alert = tw.div`
  flex
`;

export const AlertContent = tw.div`
  w-1/2
  flex
  items-center
  justify-center
`;

export const Title = tw.p`
  font-bold
  text-lg
`;

export const Description = tw.p`
  text-lg
`;

export const AlertIcon = tw(AiOutlineInfoCircle)`
  py-1
  w-10
  h-10
  mr-4
  text-red-500
  fill-current
`;

export const CloseIcon = tw(IoMdClose)`
  w-6
  h-6
`;

export const ButotnClose = tw.button`
  absolute
  right-2
`;
