import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledTable = styled.table`

${props => props.size === "half" ? tw`text-green-400` : tw`w-full`}

}}

  ${tw`border-collapse box-border mb-2 mt-6`}

    & {
      tr {
        ${tw`bg-white`}
      }
      th {
        ${tw`font-normal py-2 border-t-2 border-l-0 border-r-0 border-b-2 border-gray-300 border-solid`}
      }
      th:nth-child(n+2):nth-last-child(n+2){
        ${tw`w-32`}
      }
      th:last-of-type {
        ${tw`w-4`}
      }

      td {
        ${tw`py-2 border-t-0 border-l-0 border-r-0 border-b border-gray-300 border-solid`}
      }
      td:first-of-type {
        ${tw``}
      }
      td:last-of-type {
        ${tw`w-4`}
      }
      td:nth-child(n+2):nth-last-child(n+2) {
        ${tw`w-32 text-center`}
      }
      svg {
        ${tw`opacity-75`}
      }

    }
`;
export const StyledTableWhishlist = styled.table`
  ${tw`w-full border-collapse box-border mb-2 mt-6`}

    & {
      a {
        ${tw`text-current no-underline`}
      }
      tr {
        ${tw`bg-white`}
      }
      th {
        ${tw`font-normal py-2 border-t-2 border-l-0 border-r-0 border-b-2 border-gray-300 border-solid`}
      }
      th:nth-child(n+3):nth-child(-n+5){
        ${tw`w-32`}
      }
      th:last-of-type {
        ${tw`w-16`}
      }

      td {
        ${tw`border-t-0 border-l-0 border-r-0 border-b border-gray-300 border-solid py-2`}
      }
      th:first-of-type,
      td:first-of-type {
        ${tw`w-20`}
      }
      td:last-of-type {
        ${tw`w-16`}
      }
      td:nth-child(n+3):nth-child(-n+5) {
        ${tw`w-32 text-center`}
      }
      svg {
        ${tw`w-4 opacity-75 ml-2 cursor-pointer`}
      }
      img {
        ${tw`w-16 object-cover`}
      }
    }
`;

export const StyledDetailTable = styled.table.attrs({
  className: "border-collapse w-full",
})`${tw`border-collapse w-full`}

  & {
    th:first-of-type,
    td:first-of-type {
      ${tw`w-20`}
    }
    th,td {
      ${tw`py-4 px-4`}
    }
    tr:nth-child(2n) td {
      ${tw`bg-gray-100`}
    }
    th,td {
      ${tw`border-b border-l border-r border-t border-gray-300 border-solid`}
    }
  }



`