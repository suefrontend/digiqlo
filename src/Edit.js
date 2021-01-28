import React, { useState, useEffect } from 'react';
import { StyledContainerNoBg, StyledContainerMain } from './styles/StyledContainer';
import { StyledTable, StyledDetailTable } from './styles/StyledTable'
import firebase from './firebase/firestore'
import {
  useParams, useHistory
} from 'react-router-dom';
import { useForm } from 'react-hook-form'


const Edit = ({currentDoc, setEditing}) => {
  const [item, setItem] = useState({})
  const [error, setError] = useState();
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
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

    console.log("Update data like this: ", data);
    console.log("test", test);
    setEditing(false);

  }


  const [test, setTest] = useState({
    label: 'LABEL',
    color: 'COLOR',
    year: 'YEAR',
    brand: 'BRAND',
    price: '200',
    season: 'winter',
    note: 'cool'
   });


  const handleChange = (event) => {

    event.preventDefault();

    //const { label, color, year, brand, price, season, note } = event.target;

    // console.log("target", label, color, year)

    const { name, value } = event.target

    //console.log("target.value", event.target.value)
    //setClothItem({ ...clothItem, [name]: value })

    setTest({...test,  [name]: value})

    //console.log("clothItem", clothItem)
    //console.log("test", test)


  }


  return (
    <>

      <StyledContainerMain>
      <form onSubmit={handleSubmit(onSubmit)}>

        <StyledContainerNoBg>
          <div>
            <img src={item.image} alt="stew" class="" />

          </div>

          <div>
            <h2>
              <input
                type="text"
                name="label"
                value={currentDoc.label}
                ref={register}
                onChange={handleChange}
              />
            </h2>

            <StyledDetailTable>
              <tr>
                <td>Category</td>
                <td>
                <select name="category" ref={register} onChange={handleChange}>
                  <option value={currentDoc.category} selected>{currentDoc.category}</option>
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
                <option value={currentDoc.color} selected>{currentDoc.color}</option>
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
                  value={currentDoc.year}
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
                    value={currentDoc.brand}
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
                    value={currentDoc.price}
                    ref={register}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              {/* <tr>
                <td>Sleeve</td>
                <td>{currentDoc.sleeve}</td>
              </tr> */}
              <tr>
                <td>Season</td>
                <td>
                <select
                  name="season"
                  ref={register}
                  onChange={handleChange}
                >
                <option value={currentDoc.season} selected>{currentDoc.season}</option>
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
                    value={currentDoc.note}
                    ref={register}
                    onChange={handleChange}
                  >
                  {currentDoc.note}</textarea>
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
