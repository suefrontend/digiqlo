import React, { useState, useEffect } from 'react';
import { StyledContainerNoBg, StyledContainerMain } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'
import firebase from './firebase/firestore'
import {
  useParams, useHistory
} from 'react-router-dom';
import { useForm } from 'react-hook-form'


const Edit = ({currentUser, setEditing }) => {
  const [item, setItem] = useState({})
  const [error, setError] = useState();
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();


  const [user, setUser] = useState(currentUser);




  // const [clothItem, setClothItem] = useState({
  //   label: item,
  //   color: "COLOR",
  //   year: "YEAR",
  //   brand: item.brand,
  //   price: item.price,
  //   season: item.season,
  //   note: item.note
  // })








const initialFormState = {
  label: '',
  color: '',
  year: '',
  brand: '',
  price: '',
  season: '',
  note: ''
}
const [currentDocument, setCurrentDocument] = useState(initialFormState)
//console.log("initialFormState", initialFormState)


const [newTest, setNewTest] = useState(initialFormState);

//console.log("newTest", newTest)

// const [clothItem, setClothItem] = useState({
//   label: item.label,
//   color: item.color,
//   year: item.year,
//   brand: item.brand,
//   price: item.price,
//   season: item.season,
//   note: item.note
// })

  const onSubmit = data => {

    const storageRef = firebase.storage().ref();
    // console.log("data", data.image[0].name);
    console.log("data", data);

    const fileRef = storageRef.child(`closet/${data.image[0].name}`);
    fileRef.put(data.image[0]).then(() => {
      console.log("Uploaded a file")
      console.log("fileRef", fileRef)
    })


    console.log("Update data like this: ", data);
    // console.log("test", test);

    firebase.firestore().collection("closet").doc(id).update({
      id: user.id,
      // image: user.image,
      image: `https://firebasestorage.googleapis.com/v0/b/digiqlo-554a3.appspot.com/o/closet%2F${data.image[0].name}?alt=media`,
      label: user.label,
      color: user.color,
      year: user.year,
      brand: user.brand,
      price: user.price,
      season: user.season,
      note: user.note
    });
    setEditing(false);
  }

  const handleChange = (event) => {

    const { name, value } = event.target

    setUser({...user,  [name]: value})

  }


  return (
    <>

      <StyledContainerMain>
      <form onSubmit={handleSubmit(onSubmit)}>

        <StyledContainerNoBg>
          <div>
            <img
              src={user.image}
              alt={user.label}
              ref={register}
              onChange={handleChange}
            />
            <input
                type="file"
                name="image"
                ref={register}
                onChange={handleChange}
              />
          </div>

          <div>
            <h2>
              <input
                type="text"
                name="label"
                value={user.label}
                ref={register}
                onChange={handleChange}
              />
            </h2>

            <StyledDetailTable>
              <tr>
                <td>Category</td>
                <td>
                <select name="category" ref={register} onChange={handleChange}>
                  <option value={user.category} selected>{user.category}</option>
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

                </td>
              </tr>
              <tr>
                <td>Color</td>
                <td>

                <select
                  name="color"
                  ref={register}
                  onChange={handleChange}>
                <option value={user.color} selected>{user.color}</option>
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


                </td>
              </tr>
              <tr>
                <td>Year</td>
                <td><input
                  type="text"
                  name="year"
                  value={user.year}
                  ref={register}
                  onChange={handleChange}
                />
                </td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>
                  <input
                    type="text"
                    name="brand"
                    value={user.brand}
                    ref={register}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Price</td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={user.price}
                    ref={register}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              {/* <tr>
                <td>Sleeve</td>
                <td>{user.sleeve}</td>
              </tr> */}
              <tr>
                <td>Season</td>
                <td>
                <select
                  name="season"
                  ref={register}
                  onChange={handleChange}
                >
                <option value={user.season} selected>{user.season}</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
                <option value="all seasons">All Seasons</option>
              </select></td>
              </tr>
              <tr>
                <td>Note</td>
                <td>
                  <textarea
                    name="note"
                    value={user.note}
                    ref={register}
                    onChange={handleChange}
                  >
                  {user.note}</textarea>
                  </td>
              </tr>
            </StyledDetailTable>
          <button>Save</button>

          </div>
        </StyledContainerNoBg>
      </form>
      </StyledContainerMain>
    </>
  )
}

export default Edit;
