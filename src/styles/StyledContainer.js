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

export const StyledFlexContainerHalf = styled.div`
${tw`flex justify-between px-24`}


`;

export const StyledContainerNoBg = styled.div`
  ${tw`flex px-12 pt-10 pb-8`}

  & {
    div:first-of-type {
      ${tw`w-1/3`}
    }
    div:last-of-type {
      ${tw`ml-12 w-2/3`}
    }    
    img {
      ${tw`w-full object-cover border border-solid border-gray-300`}
    }
    h2 {
      ${tw`mt-0 pt-0`}
    }
  }
`;

export const StyledFlex = styled.div`
  ${tw`px-4 py-6 flex items-center`}

  & {
    span {
      ${tw`mr-2`}
    }
  }
`;

export const StyledClosetContainer = styled.div`
  ${tw`grid grid-cols-5 gap-4`}
`;

export const Flex = styled.div`
  ${tw`flex items-center justify-between my-6`}
`;
export const FlexWrapper = styled.div`
  ${tw`box-border flex flex-wrap -mx-2`}
`;

export const FlexInner = styled.div`
  ${tw`box-border w-1/2 px-2 mb-4`}
`;

export const FlexItem = styled.div`
  ${tw`box-border px-4 py-4 bg-white shadow-md rounded`}
`;

export const StyledContainerMiniWrapper = styled.div`

  ${tw`box-border flex flex-wrap -mx-2 mb-6`}


}
`
export const StyledContainerMini = styled.div`

${tw`box-border mb-4 w-1/4 px-2`}
& {
  div {
    ${tw`box-border bg-white shadow rounded py-4 pb-8`}

  }
}
}
`