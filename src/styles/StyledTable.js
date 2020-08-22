import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledTable = styled.table`
  ${tw`table-auto border-collapse border-2 border-gray-500`}
`;

export const StyledTableTr = styled.tr`
  ${tw`bg-white`}
`;

export const StyledTableTd = styled.td`
  ${tw`border border-gray-900 border-solid `}
`;