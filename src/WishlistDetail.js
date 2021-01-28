import React, { useState, useEffect } from 'react';
import { StyledContainerNoBg, StyledContainerMain } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'
import firebase from './firebase/firestore'
import {
  useParams, Link, useHistory
} from 'react-router-dom';

const WishlistDetail = () => {
  const [item, setItem] = useState([])
  const [error, setError] = useState();
  const { id } = useParams();
  const history = useHistory();

  console.log("param", id);

  useEffect(() => {

    const db = firebase.firestore();
    var docRef = db.collection("wishlist").doc(id);

    docRef.get()
      .then(async response => {

        const newItem = response.data();
        await setItem(newItem);
        await console.log("item", item);
      });

  }, [])

  const deleteItem = () => {
    console.log("Delete")
    // 1. .delete();
    firebase.firestore().collection("wishlist").doc(id).delete();

    // 2. push history
    history.push('/wishlist');
  }

  return (
    <>

      <StyledContainerMain>
        <StyledContainerNoBg>
          <div>
            <img src={item.image} alt="stew" class="" />

          </div>

          <div>
            <h2>{item.label} [{item.season}]</h2>

            <StyledDetailTable>
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
                <td>Sleeve</td>
                <td>{item.sleeve}</td>
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

            <Link to={`/edit/${id}`}>
              <button>
                Update
              </button>
            </Link>
            <button onClick={deleteItem}>Delete</button>

          </div>

        </StyledContainerNoBg>

      </StyledContainerMain>
    </>
  )
}

export default WishlistDetail;
