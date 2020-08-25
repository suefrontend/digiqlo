import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledNav = styled.nav`
  ${tw``}  

  & {
    a {
      ${tw`no-underline`}
    }
  }
`;

export const StyledNavWrapper = styled.div`
  ${tw`flex flex-col ml-6 mr-6`}
`;

export const StyledUl = styled.ul`
  ${tw`list-none list-inside mt-8 p-0`}
`;

export const StyledLi = styled.li`
  ${tw`hover:bg-gray-200 transition ease-out duration-500`};

  & {
    a {
      ${tw`flex py-5  cursor-pointer no-underline text-current block`};
    }
    svg {
      ${tw`w-5 mr-4 fill-current`};
    }
  }
`;
