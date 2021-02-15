import React, { useState, useEffect } from 'react';
import { StyledContainerNoBg, StyledContainerMain } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'
import firebase from './firebase/firestore'
import Edit from './Edit';
import {
  useParams
} from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";


const Detail = () => {
  const [item, setItem] = useState([])
  const [error, setError] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {

    const db = firebase.firestore();
    var docRef = db.collection("closet").doc(id);

    docRef.get()
      .then(async response => {

        const newItem = response.data();
        await setItem(newItem);
      });

  }, [])


  const updateDocument = (id, updatedDocument) => {
    setEditing(false)
    }



  const deleteItem = () => {

    firebase.firestore().collection("closet").doc(id).delete();

    history.push('/');
  }

  const initialFormState = {
    id: null,
    image: '',
    label: '',
    color: '',
    year: '',
    brand: '',
    price: '',
    season: '',
    note: ''
   }
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editDocument = document => {
    setEditing(true)
    setCurrentUser({

    id: id,
    image: item.image,
    category: item.category,
    label: item.label,
      color: item.color,
      year: item.year,
      brand: item.brand,
      price: item.price,
      season: item.season,
      note: item.note
    })
    }


    const updateUser = (id, updateUser) => {
      setEditing(false);
    };


  return (
    <>

      <StyledContainerMain>
      {editing ? (


            <Edit
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                currentUser={currentUser}
              />



          ) : (

        <StyledContainerNoBg>



          <div>
            <img src={item.image} alt={item.label} class="" />

          </div>

          <div>
            <h2>{item.label} [{item.season}]</h2>

            <StyledDetailTable>
              <tr>
                <td>Category</td>
                <td>{item.category}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{item.color}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{item.year}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{item.brand}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>${item.price}</td>
              </tr>
              <tr>
                <td>Season</td>
                <td>{item.season}</td>
              </tr>
              <tr>
                <td>Note</td>
                <td>{item.note}</td>
              </tr>
            </StyledDetailTable>

          <button onClick={editDocument}>
            Update
          </button>

          <button onClick={deleteItem}>Delete</button>
          </div>


        </StyledContainerNoBg>
      )}
      </StyledContainerMain>
    </>
  )
}

export default Detail;
