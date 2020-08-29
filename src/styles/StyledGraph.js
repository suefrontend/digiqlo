import styled from 'styled-components'
import tw from "twin.macro"

export const StyledGraph = styled.div`
  ${tw``}
  &{
    div {
      ${tw`flex items-center`}
    }
  }
`;

export const StyledGraphLabel = styled.div`
  ${tw`w-1/5 text-indigo-500 tracking-tighter`}

  & {
    div {
      ${tw`flex items-center mt-1`}
    }
  }
`;

export const StyledGraphStatus = styled.div`
  ${tw`w-3/5 py-2`}

  & {
    div {
      ${tw`bg-gray-300 w-full rounded-lg h-2 py-1`}

      div {
        ${tw`w-7/12 bg-indigo-600 rounded-lg h-2`}
      }
    }
  }
`;

export const StyledGraphPercentage = styled.div`
  ${tw`w-1/5 text-gray-700 pl-3`}
  & {
    span {
      ${tw`text-sm`}
    }
  }
`;