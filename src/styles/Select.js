import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledSelect = styled.select`
${tw`box-border block appearance-none bg-white border-0 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline`}
`;

export const SelectContainer = styled.div`

  ${tw`inline-block relative w-64`}

  & {
    select {
      ${tw`block z-10 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
    }
    div {
      ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}

      svg {
        ${tw`fill-current h-4 w-4`}
      }
    }
  }

`;

export const SVGContainer = styled.div`
  ${tw`pointer-events-none`}

  $ {
    svg {
      ${tw`fill-current h-4 w-4`}
    }
  }
`;
