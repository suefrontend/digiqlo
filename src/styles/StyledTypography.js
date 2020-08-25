import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledTypography = styled.div`

  ${tw`text-center`}

  & {
    span {
      ${tw`text-5xl block`}
    }
  }
`;

export const StyledTypographyRight = styled.span`
  ${tw`block text-right text-xs text-gray-500`}
`;