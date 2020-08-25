import styled from 'styled-components'
import tw from "twin.macro"

export const StyledContainer = styled.div`
  ${tw`flex h-full text-gray-600`}
`;

export const StyledContainerMain = styled.div`

  ${tw`bg-white shadow-md rounded pt-2 pb-6 mb-10`}

  ${props => props.type === "padding" ? tw`px-6` : tw``}

  & {
    p {
      ${tw`pb-4 text-center border-b border-t-0 border-r-0 border-l-0 border-gray-300 border-solid`}
    }

  }
`;

export const StyledFlexContainer = styled.div`
  ${tw`flex justify-between px-24`}
`;