import tw from "tailwind-styled-components"

export const MainLogin = tw.main`
  flex
`;

export const BgLogin = tw.img`
  w-1/2
  h-screen
`;

export const Login = tw.div`
  w-1/2
  flex
  items-center
  justify-center
`;

export const ContentLogin = tw.div`
  flex
  flex-col
  space-y-14
`;

export const Logo = tw.img`
  w-44
`;

export const Title = tw.p`
  text-5xl
  font-semibold
`;

export const FormsLogin = tw.form`
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
  mt-10
`;

export const Subtitle = tw.p`
  absolute
  float-left
  p-1
  bg-white
  -top-4
  left-6
`;

export const ChangePassword = tw.button`
  mx-20
  w-full
  flex
  justify-end
  underline
  text-gray-500
`;

export const ButtonIn = tw.button`
  w-full
  p-4
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