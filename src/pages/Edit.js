import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { StyledFlexContainer } from '../styles/Layout';
import { StyledForm, StyledSelect } from '../styles/Form';
import { StyledTable } from '../styles/Table';
import { StyledBtn } from '../styles/Button';
import { StyledRow } from '../styles/Grid';
import firebase from '../firebase/firestore';
import { useForm } from "react-hook-form";

const Edit = ({ mode }) => {

  const { id } = useParams();
  const history = useHistory();
  const [cloth, setCloth] = useState([]);
  const [updatedData, setUpdatedData] = useState({
    image: '',
    label: '',
    color: '',
    year: '',
    brand: '',
    price: '',
    season: '',
    note: ''
  });
  const { register, handleSubmit } = useForm();
  // Edit Mode
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const db = firebase.firestore();

    const fetchData = async () => {
      const itemRef = db.collection("closet").doc(id);
      const itemDoc = await itemRef.get();

      if(itemDoc.exists) {
        setCloth(itemDoc.data());
      }
    }

    fetchData();

  }, [])

  const onFormSubmit = (data) => {

    // const storageRef = firebase.storage().ref();
    // const fileRef = storageRef.child(`closet/${data.image[0].name}`);
    // fileRef.put(data.image[0]);

    firebase.firestore().collection("closet").doc(id).update({
      // image: `https://firebasestorage.googleapis.com/v0/b/digiqlo-554a3.appspot.com/o/closet%2F${data.image[0].name}?alt=media`,
      label: updatedData.label,
      color: updatedData.color,
      year: updatedData.year,
      brand: updatedData.brand,
      price: updatedData.price,
      season: updatedData.season,
      note: updatedData.note
    });
    console.log("data", data)
    setEditing(false);
    history.push('/');
  }

  const cancelUpdate = () => {
    setEditing(false);
    history.goBack();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({...cloth, [name]: value});
    console.log("updatedData", updatedData)
  }

  return (
    <>
    <h2>EDIT!!!</h2>
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
      <StyledFlexContainer>
        <div className="detail__image">
          <figure>
            <img src={cloth.image} alt={cloth.label} />
          </figure>
          <input type="file" name="image" ref={register}  onChange={handleChange} className="no-bg" />
        </div>

        <div className="detail__body">

            <StyledTable className="mb20">
              <tr>
                <th>Category</th>
                <td>
                  <StyledSelect>
                    <select name="category" ref={register} onChange={handleChange}>
                      <option value={cloth.category} selected>{cloth.category}</option>
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
                </td>
              </tr>
              <tr>
                <th>Color</th>
                <td>
                  <StyledSelect>
                    <select name="color" ref={register} onChange={handleChange}>
                      <option value={cloth.color} selected>{cloth.color}</option>
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
                </td>
              </tr>
              <tr>
                <th>Year</th>
                <td>
                  <StyledSelect>
                    <select name="year" ref={register} onChange={handleChange}>
                      <option value={cloth.year}>{cloth.year}</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="~2014">~2014</option>
                    </select>
                  </StyledSelect>
                </td>
              </tr>
              <tr>
                <th>Brand</th>
                <td>
                  <input type="text" name="brand" value={cloth.brand} ref={register} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Price</th>
                <td>
                  <input type="text" name="price" value={cloth.price} ref={register} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <th>Season</th>
                <td>
                  <StyledSelect>
                    <select name="season" ref={register} onChange={handleChange}>
                      <option value={cloth.season}>{cloth.season}</option>
                      <option value="spring">Spring</option>
                      <option value="summer">Summer</option>
                      <option value="fall">Fall</option>
                      <option value="winter">Winter</option>
                      <option value="all seasons">All Seasons</option>
                    </select>
                  </StyledSelect>
                </td>
              </tr>
              <tr>
                <th>Note</th>
                <td><textarea name="note" type="text" value={cloth.note} ref={register} onChange={handleChange}/></td>
              </tr>
            </StyledTable>

            <StyledRow>
              <StyledBtn className="gray full-width mr20" onClick={onFormSubmit}><Link to="#">Update</Link></StyledBtn>
              <StyledBtn className="gray full-width" onClick={cancelUpdate}>Cancel</StyledBtn>
            </StyledRow>

          </div>
        </StyledFlexContainer>
      </StyledForm>
    </>
  )
}

export default Edit;
