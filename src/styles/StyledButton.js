import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledButton = styled.button`
  ${tw`flex w-full no-underline items-center justify-center py-3 bg-blue-500 cursor-pointer rounded border-transparent text-white focus:outline-none`}

  & {
    span {
      ${tw``}
    }
    svg {
      ${tw`w-5 mr-1`};
    }
    a {
      ${tw`no-underline text-current`}
    }
  }
`;

export const StyledButtonMini = styled.button`
  ${tw`py-1 w-40 mt-2 bg-blue-500 cursor-pointer rounded border-transparent text-white focus:outline-none`}
`;