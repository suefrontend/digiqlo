import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledCard = styled.div`

${tw`flex justify-between flex-col bg-white shadow`}

  & {
      div {
        ${tw`flex items-center h-full`}

        a{
          ${tw`h-full block`}

          img {
            ${tw`w-full h-full object-cover`}
          }
        }
      }


    p {
      ${tw`px-4`}

      a{
        ${tw`text-current no-underline text-base`}
      }
    }

  }

`;

export const StyledCardList = styled.div`
  ${tw`grid grid-cols-5 gap-4`}
`;