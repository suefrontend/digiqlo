import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledSelect = styled.select`
${tw`box-border block appearance-none bg-white border-0 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline`}
`;

export const StyledSelectContainer = styled.div`

  ${tw`relative`}
  
`;

export const SVGContainer = styled.div`
  ${tw`pointer-events-none`}

  $ {
    svg {
      ${tw`fill-current h-4 w-4`}
    }
  }
`;