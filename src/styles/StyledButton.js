import styled from 'styled-components'
import tw from 'twin.macro'

const StyledButton = styled.button`
  ${tw`flex items-center justify-center py-3 bg-blue-500 cursor-pointer rounded border-transparent text-white focus:outline-none`}

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

export default StyledButton;