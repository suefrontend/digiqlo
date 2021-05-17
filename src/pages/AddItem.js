import React from 'react';
import { StyledH3 } from '../styles/Typography';
import { Btn, StyledBtnArea } from '../styles/Button';
import { StyledForm, StyledSelect } from '../styles/Form';
import { StyledRow, StyledRowItem } from '../styles/Grid';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import firebase from '../firebase/firestore';

const AddItem = () => {

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onFormSubmit  = data => {

    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`closet/${data.image[0].name}`);
    fileRef.put(data.image[0]);

    firebase.firestore().collection('closet').add({
      image: `https://firebasestorage.googleapis.com/v0/b/digiqlo-554a3.appspot.com/o/closet%2F${data.image[0].name}?alt=media`,
      label: data.label,
      category: data.category,
      color: data.color,
      brand: data.brand,
      price: data.price,
      year: data.year,
      season: data.season,
      note: data.note,
      createdAt: new Date()
    })

    history.push('/');
  }

  return (
    <>
    <StyledH3>Add Item</StyledH3>
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>

      <StyledRow>
        <StyledRowItem>
          <label for="image">Image</label>
          <input type="file" name="image" ref={register} />
        </StyledRowItem>
        <StyledRowItem>
          <label for="label">Label</label>
          <input name="label" type="text" ref={register} />
        </StyledRowItem>
      </StyledRow>

      <StyledRow>
        <StyledRowItem>
          <label for="category">Category</label>
            <StyledSelect>
              <select name="category" ref={register}>
                <option hidden>Select</option>
                <option value="shirts">Shirts</option>
                <option value="bottoms">Bottoms</option>
                <option value="outerwears">Outerwears</option>
                <option value="dressess">Dresses</option>
                <option value="accessories">Accessories</option>
                <option value="tops">Tops</option>
                <option value="knitted">Knitted</option>
                <option value="shoes">Shoes</option>
                <option value="underwears">Underwears</option>
                </select>
            </StyledSelect>
        </StyledRowItem>

        <StyledRowItem>
            <label for="color">Color</label>
              <StyledSelect>
                <select name="color" ref={register}>
                  <option hidden>Select</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="gray">Gray</option>
                  <option value="brown">Brown</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="yellow">Yellow</option>
                  <option value="orange">Orange</option>
                  <option value="ivory">Ivory</option>
                  <option value="navy">Navy</option>
                  <option value="beige">Beige</option>
                  <option value="border">Border</option>
                  <option value="stripe">Stripe</option>
                </select>
              </StyledSelect>
          </StyledRowItem>
        </StyledRow>

        <StyledRow>
          <StyledRowItem>
              <label for="inline-full-name">Brand</label>
              <input name="brand" type="text"ref={register} />
          </StyledRowItem>

          <StyledRowItem>
              <label for="price">Price</label>
              <input name="price" type="text" ref={register} />
          </StyledRowItem>
        </StyledRow>

        <StyledRow>
          <StyledRowItem>
            <label for="size">Year</label>
              <StyledSelect>
                <select name="year" ref={register}>
                  <option hidden>Select</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                </select>
                </StyledSelect>
            </StyledRowItem>
        <StyledRowItem>

          <label for="season">Season</label>
          <StyledSelect>
          <select name="season" ref={register}>
            <option hidden>Select</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="all seasons">All Seasons</option>
          </select>
          </StyledSelect>
        </StyledRowItem>
      </StyledRow>

          <label for="note">Note</label>
          <textarea name="note" type="text" ref={register} />

          <StyledBtnArea>
            <Btn className="gray">Submit</Btn>
          </StyledBtnArea>

    </StyledForm>
    </>
  )
}

export default AddItem;
