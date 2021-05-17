import styled from 'styled-components';

export const StyledForm = styled.form`

  input {
    width: 100%;
    border-style:solid;
    //border: 1px soild #999;
    border-radius: 5px;
    background: #fefefe;
    padding: 7px;
    box-sizing: border-box;
    line-height: 1.6;

  }
  input[type="file"] {
    border: 2px solid #ddd;
    padding: 4px 7px;
  }
  figure + input[type="file"].no-bg {
    margin-top: 10px;
    background: none;
    border: none;
    padding: 0;
  }

  textarea {
    border: 2px solid #ddd;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
  }

  label {
    font-weight: bold;
    line-height: 1.6;
    display: block;
  }

  select {

    //border-radius: 5px;
    background: #fefefe;
    border: none;
    width: 100%;
    text-overflow: ellipsis;
    //border: none;
    outline: none;
    //background: transparent;
    //background-image: none;
    line-height: 1.6;
    padding: 6px 7px;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }

`;

export const StyledSelect = styled.div`

  position: relative;
	border: 2px solid #ddd;
	border-radius: 4px;
  overflow: hidden;

&: before {
  position: absolute;
	top: 0.9em;
	right: 0.9em;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #666666;
	pointer-events: none;
}

&:after {
	position: absolute;
	top: 0;
	right: 2.5em;
	bottom: 0;
	width: 1px;
	content: '';
	//border-left: 1px solid #ddd;
}

`;
