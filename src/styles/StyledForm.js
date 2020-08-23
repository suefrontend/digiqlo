import styled from "styled-components"
import tw from "twin.macro"

export const Form = styled.form`
  ${tw`w-full`}

  & {
    label {
      ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
    }
    input[type="text"] {
      ${tw`box-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    }
    input[type="checkbox"]+span {
      ${tw`ml-1 mr-4`}
    }
    input[type="radio"]+span {
      ${tw`mr-4`}
    }
    select {
      ${tw`box-border block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline`}
    }    
    textarea {
      ${tw`w-full p-2  box-border resize border rounded focus:outline-none focus:shadow-outline`}
    }
    button {
      ${tw`py-1 w-12 bg-blue-500 cursor-pointer rounded border-transparent text-white focus:outline-none`}
    }
  }
`;

export const Span = styled.span`
  ${props => props.type === "heading" ? tw`text-green-400` : tw`text-pink-600`}
`;

export const FormItemContainer = styled.div`
  ${tw`flex items-center justify-between px-4 mb-6`}
`;

export const FormItem = styled.div`
  ${props => {
    if (props.size === "half") {
      tw`w-1/2 px-3 mb-6 md:mb-0 hidden`;
    } else if (props.size === "full") {
      tw`w-full md:w-1/2 px-3`;
    }
  }
  }
`;
export const FormItemFull = styled.div`  
    ${tw`w-full px-3`}
`;

export const FormItemHalf = styled.div`  
    ${tw`w-1/2 px-3 mb-6 md:mb-0`}
`;

export const StyledForm = styled.div.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    

      div {
        ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}

        svg {
          ${tw`fill-current h-4 w-4`}
        }
      }

      label {
        ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
      }

      select {
        ${tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
      }
      input {
        ${tw`block border-gray-300 mb-4 border-solid border rounded py-2 px-4`}
      }
      button {
        ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
      }
    }

  }
`