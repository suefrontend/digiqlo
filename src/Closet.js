import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListItem from './components/ListItem'
import StyledCard from './styles/StyledCard';
import { StyledHeadingH2 } from './styles/StyledHeading';
import { StyledClosetContainer, Flex } from './styles/StyledContainer'
import { StyledSelectContainer } from './styles/StyledInput';
import firebase from './firebase/firestore'
import { storage } from "./firebase/firestore"

// const getCategory = () => {

//   const [category, setCategory] = useState([]);
//   const [error, setError] = useState();

//   useEffect(() => {
//     firebase.firestore().collection('closet')
//       .then(response => {
//         const categoryLists = [];

//         response.forEach(doc => {
//           const categoryList = {
//             id: doc.id,
//             ...doc.data()
//           }
//           categoryLists.push(categoryList)
//         })
//         setCategory(categoryLists)
//         console.log(response)
//       })
//       .catch(error => {
//         setError(error);
//       });

//   }, [])

// }


const Closet = ({ id }) => {

  // const lists = useLists()

  // const [albums, setAlbums] = useState([])
  // const [images, setImages] = useState([]);
  // const [albumName, setAlbumName] = useState("");

  // useEffect(() => {
  //   firebase.firestore().collection('closet').doc("Tops").onSnapshot((snapshot) => {
  //     const tempAlbums = []
  //     // snapshot.forEach(doc => {
  //     //   tempAlbums.push({ ...doc.data(), id: doc.id })
  //     // })
  //     setImages(snapshot.data().images || []);
  //     setAlbumName(snapshot.data().name);
  //     setAlbums(tempAlbums)
  //   })
  // }, [])

  const [lists, setLists] = useState([])
  const [error, setError] = useState();

  useEffect(() => {
    // firebase.firestore().collectionGroup('closet')
    //   .then(response => {
    //     // const closetLists = [];

    //     // response.forEach(doc => {
    //     //   const closetList = {
    //     //     id: doc.id,
    //     //     ...doc.data()
    //     //   }
    //     //   closetLists.push(closetList)
    //     // })
    //     // setLists(closetLists)
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     setError(error);
    //   });

    // const data = [

    // ]

    // var db = firebase.firestore();
    // var batch = db.batch()

    // data.forEach((doc) => {
    //   var docRef = db.collection("closet").doc(); //automatically generate unique id
    //   batch.set(docRef, doc);
    // });

    // batch.commit()

    var db = firebase.firestore();

    db.collection('closet').get()
      // db.collection('closet')
      .then(response => {
        const closetLists = [];
        response.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          const closetList = {
            id: doc.id,
            ...doc.data()
          }
          closetLists.push(closetList)
          // console.log(doc.id, " => ", doc.data());
        })
        setLists(closetLists)

      });




  }, [])

  console.log(lists)
  return (
    <>
      {/* 
      {images.map(el => (
        <aside>
          Image: <img src={el.url} alt="album" />
        </aside>
      ))} */}

      {lists.map(list => {
        return (
          <div>
            {/* console.log(list.size) */}
            {list.size}
          </div>
        )
      }
      )}

      <StyledHeadingH2>Closet</StyledHeadingH2>
      {/* <ListItem /> */}
      <Flex>
        <StyledSelectContainer>
          <select>
            <option>Jacket</option>
            <option>Outerwear</option>
            <option>Bottoms</option>
            <option>Tops</option>
            <option>Skirt</option>
            <option>Shirt</option>
            <option>Shoes</option>
            <option>Tanks</option>
          </select>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </StyledSelectContainer>
        <span>Total: 102</span>
      </Flex>

      <StyledClosetContainer>

        {lists.map(list => {
          return (
            <StyledCard>
              <div>
                <Link to={`/closet/${id}`}><img src={list.image} alt={list.label} /></Link>
              </div>
              <p><Link to={`/closet/${id}`}>{list.label}</Link></p>
            </StyledCard>
          )
        }
        )}

      </StyledClosetContainer>
    </>
  )
}

export default Closet;