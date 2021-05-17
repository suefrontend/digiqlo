import React, { useState, useEffect } from 'react';
import { StyledFlexContainer } from '../styles/Layout';
import { StyledTable } from '../styles/Table';
import { useParams } from 'react-router-dom';
import { StyledBtn } from '../styles/Button';
import { StyledRow } from '../styles/Grid';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firestore';
import Edit from '../pages/Edit';

const Detail = () => {

  const { id } = useParams();
  const history = useHistory();
  const [cloth, setCloth] = useState([]);
  // Edit Mode
  const [editing, setEditing] = useState(false);


  // console.log(url)

  useEffect(() => {

    const db = firebase.firestore();

    const fetchData = async () => {
      const itemRef = db.collection("closet").doc(id);
      const itemDoc = await itemRef.get();
      console.log("itemDoc", itemDoc)

      if(itemDoc.exists) {
        setCloth(itemDoc.data());
      }
    }

    fetchData();

  }, [])

  const deleteItem = () => {
    if (window.confirm("Are you sure want to delete this item?")) {
      firebase.firestore().collection('closet').doc(id).delete();
      history.push('/');
    }
  }

  const editItem = () => {
    setEditing(true);
  }

  return (
    <>
    {editing ? (
      <>
        <Edit mode={editing} />
      </>
    ) : (
      <>
    <h2>Black Shirt [Summer]</h2>
    <StyledFlexContainer>

      <div className="detail__image">
        <figure>
          {cloth.image ?
            <img src={cloth.image} alt={cloth.label} />
            :
            <img src="https://firebasestorage.googleapis.com/v0/b/digiqlo-554a3.appspot.com/o/other%2Fdummy.jpg?alt=media" alt="No Image" />
          }
        </figure>
      </div>

      <div className="detail__body">

          <StyledTable className="mb20">
            <tr>
              <th>Category</th>
              <td>{cloth.category || ("-")}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{cloth.color || ("-")}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{cloth.year || ("-")}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{cloth.brand || ("-")}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>${cloth.price || ("-")}</td>
            </tr>
            <tr>
              <th>Season</th>
              <td>{cloth.season || ("-")}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{cloth.note || ("-")}</td>
            </tr>
          </StyledTable>

          <StyledRow>
            <StyledBtn className="gray full-width mr20" onClick={editItem}>Edit</StyledBtn>
            <StyledBtn className="gray full-width" onClick={deleteItem}>Delete</StyledBtn>
          </StyledRow>

        </div>

    </StyledFlexContainer>
    </>
    )}
    </>
  )
}

export default Detail;
