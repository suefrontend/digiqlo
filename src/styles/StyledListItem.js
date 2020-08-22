import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledListItem = styled.div`
  ${tw`flex items-center border-t-0 border-l-0 border-r-0 border-b border-gray-300 border-solid py-4 px-4`}
`;

export const StyledImage = styled.div`
  ${tw`w-16 h-16 border border-gray-300 border-solid`}

  & {
    img {
      ${tw`w-16 object-cover`}
    }
  }
`
export const StyledTitle = styled.div`
  ${tw`ml-4 flex items-center`}

  & {
    svg {
      ${tw`w-3 fill-current ml-3 cursor-pointer`};
    }
  }
`

export const StyledIcons = styled.div`

  ${tw`items-end ml-auto`},

  & {
    svg {
      ${tw`w-4 fill-current ml-3 cursor-pointer`};
    }

    button {
      ${tw`rounded-sm bg-gray-300 border-none ml-2 w-16 text-gray-600 py-1 px-3  text-xs`}
    }
  }
`;