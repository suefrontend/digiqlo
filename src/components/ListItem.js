import React from 'react';
import { StyledContainerMain } from '../styles/StyledContainer';
import { StyledListItem, StyledImage, StyledTitle, StyledIcons } from '../styles/StyledListItem';

const ListItem = () => (
  <StyledContainerMain>
    <StyledListItem>
      <StyledImage><img src="https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg" alt="stew" class="" /></StyledImage>
      {/* <StyledImage></StyledImage> */}
      <StyledTitle>T-Shirt [summer]
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </svg>
      </StyledTitle>
      <StyledIcons>
        <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        {/* <button>Edit</button>
        <button>Delete</button> */}
      </StyledIcons>
    </StyledListItem>
    <StyledListItem>
      <StyledImage><img src="https://5.imimg.com/data5/HM/AE/VV/SELLER-77211399/white-plain-tshirts-500x500.jpg" alt="stew" class="" /></StyledImage>
      {/* <StyledImage></StyledImage> */}
      <StyledTitle>T-Shirt [summer]
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
        </svg>
      </StyledTitle>
      <StyledIcons>
        <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        {/* <button>Edit</button>
        <button>Delete</button> */}
      </StyledIcons>
    </StyledListItem>
  </StyledContainerMain>
)

export default ListItem;