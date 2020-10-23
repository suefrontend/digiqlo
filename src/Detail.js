import React, { useState, useEffect } from 'react';
import { StyledContainerNoBg, StyledFlexContainerHalf, StyledContainerMain, StyledFlexContainer } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'
import firebase from './firebase/firestore'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

const Detail = () => {
  const [item, setItem] = useState([])
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {

    const db = firebase.firestore();
    var docRef = db.collection("closet").doc(id);


    docRef.get()
      .then(async response => {

        if (response.exists) {
          console.log("Document data:", response.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        // const closetLists = [];
        // response.map(function (doc) {
        //   // doc.data() is never undefined for query doc snapshots
        //   const closetList = {
        //     id: doc.id,
        //     ...doc.data()
        //   }
        //   closetLists.push(closetList)
        //   // console.log(doc.id, " => ", doc.data());
        // })
        // var data = [];
        // data.push(response.data)
        // setItem(data)
        // console.log("item", item)
        // var obj = response.data();
        // console.log("obj", obj)
        // setItem(Object.assign({}, obj))
        // console.log("item", item);

        // var data = [];
        // data.push(response.obj)
        // setItem(data)
        // console.log("item", item);

        const newItem = response.data();
        // let data = Object.assign({}, newItem);  //オブジェクトを新しく作り直す必要がある
        await setItem(newItem);
        await console.log("item", item);
      });

  }, [])

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
          </div>

        </StyledContainerNoBg>

      </StyledContainerMain>
    </>
  )
}

export default Detail;