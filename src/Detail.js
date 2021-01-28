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

  console.log("param", id);

  useEffect(() => {

    const db = firebase.firestore();
    var docRef = db.collection("closet").doc(id);

    docRef.get()
      .then(async response => {

        const newItem = response.data();
        await setItem(newItem);
        await console.log("item", item);
      });

  }, [])

  // const initialFormState = {
  //   label: '',
  //   color: '',
  //   year: '',
  //   brand: '',
  //   price: '',
  //   season: '',
  //   note: ''
  // }
  // const [editing, setEditing] = useState(false);
  // const [currentDocument, setCurrentDocument] = useState(initialFormState)

  // const editDocument = document => {
  //   setEditing(true)
  //   setCurrentDocument({
  //     label: item.label,
  //     color: item.color,
  //     year: item.year,
  //     brand: item.brand,
  //     price: item.price,
  //     season: item.season,
  //     note: item.note
  //   })
  // }





  const updateDocument = (id, updatedDocument) => {
    setEditing(false)
    console.log(id,'iddddd')
    //setItem(documents.map(item => (item.id === id ? updatedDocument : item)))
    }



  const deleteItem = () => {
    console.log("Delete")
    // 1. .delete();
    firebase.firestore().collection("closet").doc(id).delete();

    // 2. push history
    history.push('/');
  }

  const initialFormState = {
    id: null,
    label: '',
    color: '',
    year: '',
    brand: '',
    price: '',
    season: '',
    note: ''
   }
  const [editing, setEditing] = useState(false);
  const [currentDoc, setCurrentDoc] = useState(initialFormState)

  const editDocument = document => {
    setEditing(true)
    setCurrentDoc({
    // id: document.id,
    // docTitle: document.docTitle,
    // description: document.description,
    // publisher : document.publisher
    id: id,
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
      //setUsers(users.map(user => (user.id === id ? updateUser : user)));
    };

    console.log("currentDoc", currentDoc)
  return (
    <>

      <StyledContainerMain>
      {editing ? (


            <Edit
                editing={editing}
                setEditing={setEditing}
                // currentUser={currentUser}
                updateUser={updateUser}
                currentDoc={currentDoc}
              />



          ) : (

        <StyledContainerNoBg>



          <div>
            <img src={item.image} alt="stew" class="" />

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
