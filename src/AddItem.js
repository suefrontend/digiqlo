import React, { useState, useEffect } from 'react';
import { Form, FormItemFull, FormItemHalf, Span, FormItem, FormItemContainer } from "./styles/StyledForm"
import { StyledHeadingH2 } from './styles/StyledHeading'
import firebase, { storage } from './firebase/firestore'
import { useForm } from 'react-hook-form'

function AddItem() {

  const [label, setLabel] = useState('')
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState('')
  const [pice, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [note, setNote] = useState('')
  const [color, setColor] = useState('')
  const [category, setCategory] = useState('')
  const [sleeve, setSleeve] = useState({
    sleeve: "long"
  })

  const cloths = [
    {
      category: "Outerwears",
      item: "Coats"
    },
    {
      category: "Outerwears",
      item: "Jackets"
    },
    {
      category: "Tops",
      item: "Hoodies"
    },
    {
      category: "Tops",
      item: "Cardigans"
    },
    {
      category: "Tops",
      item: "Long-sleeved"
    },
    {
      category: "Tops",
      item: "Short-sleeved"
    },
    {
      category: "Tops",
      item: "Polo Shirts"
    },
    {
      category: "Tops",
      item: "T-shirts"
    },
    {
      category: "Tops",
      item: "Sweatshirts"
    },
    {
      category: "Tops",
      item: "Tank Top"
    },
    {
      category: "Tops",
      item: "Camisole"
    },
    {
      category: "Shirts",
      item: "Shirts"
    },
    {
      category: "Shirts",
      item: "Blouses"
    },
    {
      category: "Suits",
      item: "Trousers"
    },
    {
      category: "Suits",
      item: "Waistcoats"
    },
    {
      category: "Suits",
      item: "Blazers"
    },
    {
      category: "Suits",
      item: "Skirts"
    },
    {
      category: "Knitted",
      item: "Cardigans"
    },
    {
      category: "Knitted",
      item: "Sweaters"
    },
    {
      category: "Bottoms",
      item: "Pants"
    },
    {
      category: "Bottoms",
      item: "Skirts"
    },
    {
      category: "Bottoms",
      item: "Shorts"
    },
    {
      category: "Bottoms",
      item: "Leggins"
    },
    {
      category: "Dresses",
      item: "Short dresses"
    },
    {
      category: "Dresses",
      item: "Long dresses"
    },
    {
      category: "Shoes",
      item: "Sneakers"
    },
    {
      category: "Shoes",
      item: "Sandals"
    },
    {
      category: "Shoes",
      item: "Boots"
    },
    {
      category: "Shoes",
      item: "Mules"
    },
    {
      category: "Shoes",
      item: "Loafers"
    },
    {
      category: "Shoes",
      item: "Pumps"
    },
    {
      category: "Shoes",
      item: "Flats"
    },
    {
      category: "Shoes",
      item: "High Heels"
    },
    {
      category: "Sportswear",
      item: "Gym"
    },
    {
      category: "Sportswear",
      item: "Yoga"
    },
    {
      category: "Sportswear",
      item: "Bras"
    },
    {
      category: "Sportswear",
      item: "Swimwears"
    },
    {
      category: "Underwear",
      item: "Lingerie"
    },
    {
      category: "Underwear",
      item: "Underwear"
    },
    {
      category: "Underwear",
      item: "Socks"
    },
    {
      category: "Nightwears",
      item: "Pajamas"
    },
    {
      category: "Nightwears",
      item: "Loungewears"
    },
    {
      category: "Accessories",
      item: "Scarves"
    },
    {
      category: "Accessories",
      item: "Gloves"
    },
    {
      category: "Accessories",
      item: "Belts"
    },
    {
      category: "Accessories",
      item: "Hats"
    },
    {
      category: "Accessories",
      item: "Ties"
    },
    {
      category: "Accessories",
      item: "Caps"
    },
    {
      category: "Accessories",
      item: "Bags"
    },
  ]

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }
  const onBrandChange = (e) => {
    setBrand(e.target.value)
  }
  const onSizeChange = (e) => {
    setSize(e.target.value)
  }
  const onNoteChange = (e) => {
    setNote(e.target.value)
  }
  const onCategoryChange = (e) => {
    setCategory(e.target.value)
    console.log('Category', category)
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }


  const onUpload = async (e) => {
    e.preventDefault();

    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    firebase.firestore().collection("closet").doc("Tops").collection("Hoodies").doc().set({
      images: firebase.firestore.FieldValue.arrayUnion({
        name: file.name,
        url: await fileRef.getDownloadURL()
      }),
      label,
      category
    })
  }

  function handleChange(e) {
    console.log("VALUE", e.target.value);
    console.log('Category', category)
  }

  // const options = cloths.map(
  //   (el) => (
  //     <option key={el.item} value={el.item}>
  //       {el.item}
  //     </option>
  //   )
  // );

  // const categoryFilter = cloths.map(cloth => {
  //   return cloth.category;
  // })

  // const resultArr = categoryFilter.filter((data, index) => {
  //   return categoryFilter.indexOf(data) === index;
  // })

  // const categoryOptions = resultArr.map(
  //   (el) => (
  //     <option key={el} value={el}>
  //       {el}
  //     </option>
  //   )
  // );

  return (
    <>

      {/* <input name="label"
        value={albumName}
        onChange={onAlbumNameChange}
        type="text" />
      {/* <input type="file" onChange={onFileChange} /> */}
      {/* <button onClick={onUpload}>Create Album</button> */} */}

      <StyledHeadingH2>Add Item</StyledHeadingH2>

        <Form onSubmit={onUpload}>
          <FormItemContainer>
            <FormItemHalf>
              <label for="inline-full-name">Image</label>
              <input type="file" onChange={onFileChange} />
            </FormItemHalf>
            <FormItemHalf>
              <label for="inline-full-name">Label</label>
              <input
                name="label"
                value={label}
                onChange={onLabelChange}
                type="text"
              />
            </FormItemHalf>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemHalf>

              <label for="category">Category</label>
              <select name="category" onChange={onCategoryChange} value={category}>
                {/* {categoryOptions} */}
              </select>


              <label for="color">Category</label>

              {/*<select>
                <optgroup label="Outerwears">
                  <option>Outerwears - Coats</option>
                  <option>Outerwears - Jackets</option>
                </optgroup>

                <optgroup label="Tops">
                  <option>Tops - Hoodies</option>
                  <option>Tops - Cardigans</option>
                  <option>Tops - Long-sleeved</option>
                  <option>Tops - Short-sleeved</option>
                  <option>Tops - Polo Shirts</option>
                  <option>Tops - T-shirts</option>
                  <option>Tops - Sweatshirts</option>
                  <option>Tops - Tank Top</option>
                  <option>Tops - Camisole</option>
                </optgroup>

                <optgroup label="Shirts">
                  <option>Shirts - Shirts</option>
                  <option>Shirts - Blouses</option>
                </optgroup>

                <optgroup label="Suits">
                  <option>Suits - Suits</option>
                  <option>Suits - Waistcoats</option>
                  <option>Suits - Blazers</option>
                  <option>Suits - Skirts</option>
                </optgroup>

                <optgroup label="Knitted">
                  <option>Knitted - Cardigans</option>
                  <option>Knitted - Sweaters</option>
                </optgroup>

                <optgroup label="Bottoms">
                  <option>Bottoms - Pants</option>
                  <option>Bottoms - Skirts</option>
                  <option>Bottoms - Shorts</option>
                  <option>Bottoms - Leggins</option>
                </optgroup>

                <optgroup label="Dresses">
                  <option>Dresses - Short dresses</option>
                  <option>Dresses - Long dresses</option>
                </optgroup>

                <optgroup label="Shoes">
                  <option>Shoes - Sneakers</option>
                  <option>Shoes - Sandals</option>
                  <option>Shoes - Boots</option>
                  <option>Shoes - Mules</option>
                  <option>Shoes - Loafers</option>
                  <option>Shoes - Pumps</option>
                  <option>Shoes - Flats</option>
                  <option>Shoes - Tops</option>
                  <option>Shoes - High Heels</option>
                </optgroup>

                <optgroup label="Sportswear">
                  <option>Sportswear - Gym</option>
                  <option>Sportswear - Yoga</option>
                  <option>Sportswear - Bras</option>
                  <option>Sportswear - Swimwears</option>
                </optgroup>

                <optgroup label="Underwear">
                  <option>Underwear - Lingerie</option>
                  <option>Underwear - Underwear</option>
                  <option>Underwear - Socks</option>
                  <option>Underwear - Nightwears</option>
                  <option>Underwear - Pajamas</option>
                  <option>Underwear - Loungewears</option>
                </optgroup>

                <optgroup label="Accessories">
                  <option>Accessories - Scarves</option>
                  <option>Accessories - Gloves</option>
                  <option>Accessories - Belts</option>
                  <option>Accessories - Hats</option>
                  <option>Accessories - Ties</option>
                  <option>Accessories - Caps</option>
                  <option>Accessories - Bags</option>
                </optgroup>

              </select>*/}
              {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div> */}
            </FormItemHalf>

            <FormItemHalf>
              <label for="color">Color</label>

              <select name="color" value={color} onChange={handleChange} >
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
              {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div> */}
            </FormItemHalf>

          </FormItemContainer>

          <FormItemContainer>
            <FormItemHalf>
              <label for="inline-full-name">Brand</label>

              <input
                name="brand"
                value={brand}
                onChange={onBrandChange}
                type="text"
              />
            </FormItemHalf>
            <FormItemHalf>
              <label for="size">Price</label>
              <input
                name="size"
                value={size}
                onChange={onSizeChange}
                type="text"
              />
            </FormItemHalf>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemHalf>
              <label for="size">Year</label>
              <input type="text" placeholder="" />
            </FormItemHalf>
            <FormItemHalf>
              <label for="">Sleeve</label>
              <input
                type="radio"
                name="sleeve"
                value="long"
                checked={sleeve === "long"}
                onChange={handleChange}
              /><span>Long</span>
              <input
                type="radio"
                name="sleeve"
                value="short"
                checked={sleeve === "short"}
                onChange={handleChange}
              /><span>Short</span>
              <input
                type="radio"
                name="sleeve"
                value="none"
                checked={sleeve === "none"}
                onChange={handleChange}
              /><span>None</span>
            </FormItemHalf>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <label for="">Season</label>
              <input type="checkbox" id="spring" /><span>Spring</span>
              <input type="checkbox" /><span>Summer</span>
              <input type="checkbox" /><span>Fall</span>
              <input type="checkbox" /><span>Winter</span>
              <input type="checkbox" /><span>All Seasons</span>
            </FormItemFull>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <label for="">Note</label>
              <textarea
                name="note"
                value={note}
                onChange={onNoteChange}
                type="text"
              />
            </FormItemFull>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <button>Add</button>
            </FormItemFull>
          </FormItemContainer>


        </Form>


    </>
  )
}

export default AddItem;

