import { Link } from "react-router-dom";
import tw from "tailwind-styled-components"

export const Main = tw.div`
  flex
  items-center
  min-h-screen
  text-white
`;

export const Container = tw.div`
  container
  flex
  items-center
  p-4
  mx-auto
`;

export const Images = tw.div`
  flex
  flex-col
  items-center
  w-4/5
  p-4
  md:w-6/12
`;

export const Img1 = tw.img`
  w-1/2
  mt-10
`;

export const Img2 = tw.img`
  w-2/3
  mt-10
  animate-spin-slow
`;

export const Text = tw.div`
  w-full
  p-16
  text-center
  text-gray-700
  md:w-7/12
  md:text-left
`;

export const Title = tw.p`
  flex
  mb-10
  text-6xl
  font-medium 
`;

export const Descrip1 = tw.div`
  mb-4
  text-xl
  font-medium
  md:text-3xl
`;

export const Descrip2 = tw.div`
  mb-8
  text-lg
`;

export const LinkHome = tw(Link)`
  flex
  items-center
  space-x-1
  text-lg
  text-blue-color
`;