import React from 'react';
import StyledForm from "./styles/StyledForm"

const AddItem = () => (

  <StyledForm>
    <form>
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" /><br />
      <button>Add</button>
    </form>
  </StyledForm>
)

export default AddItem;

