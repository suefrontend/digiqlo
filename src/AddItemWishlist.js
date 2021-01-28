import React, { useState, useEffect } from 'react';
import { Form, FormItemFull, FormItemHalf, Span, FormItem, FormItemContainer } from "./styles/StyledForm"
import { StyledH2 } from './styles/Heading';
import firebase, { storage } from './firebase/firestore'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";

const AddItemWishlist = () => {


  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  //const onSubmit = data => console.log(data);
  console.log(errors);

  const onSubmit = data => {
    const storageRef = firebase.storage().ref();
    // console.log("data", data.image[0].name);
    console.log("data", data);

    const fileRef = storageRef.child(`closet/${data.image[0].name}`);
    fileRef.put(data.image[0]).then(() => {
      console.log("Uploaded a file")
      console.log("fileRef", fileRef)
    })

    firebase.firestore().collection('wishlist').add({
        // image: fileRef,
        image: `https://firebasestorage.googleapis.com/v0/b/digiqlo-554a3.appspot.com/o/closet%2F${data.image[0].name}?alt=media`,
        label: data.label,
        category: data.category,
        color: data.color,
        brand: data.brand,
        price: data.price,
        year: data.year,
        season: data.season,
        note: data.note,
        createdAt: new Date()
    })


    history.push('/wishlist');


  }


  return (
    <>

{/* <form onSubmit={handleSubmit(onSubmitImage)}>
    <input ref={register} name="image" type="file"/>
    <button>SUBMIT</button>
</form> */}

{/* <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="title" name="title" ref={register({required: true, maxLength: 20})} />
      <input type="text" placeholder="body" name="body" ref={register} />
      <input type="datetime" placeholder="date" name="date" ref={register({required: true})} />
      <input type="submit" />
    </form> */}




      {/* <input name="label"
        value={albumName}
        onChange={onAlbumNameChange}
        type="text" />
      {/* <input type="file" onChange={onFileChange} /> */}
      {/* <button onClick={onUpload}>Create Album</button> */}

      <StyledH2>Add Item to Wishlist</StyledH2>

      <form onSubmit={handleSubmit(onSubmit)}>
      {/* <form> */}
          <FormItemContainer>
            <FormItemHalf>

              <input
                type="file"
                name="image"
                ref={register}
              />
            </FormItemHalf>
            <FormItemHalf>
              <label for="label">Label</label>
              <input
                name="label"
                ref={register}
                type="text"
              />
            </FormItemHalf>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemHalf>

              <label for="category">Category</label>

              <select name="category" ref={register}>
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

              <select name="color" ref={register}>
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
                // value={brand}
                // onChange={onBrandChange}
                type="text"
                ref={register}
              />
            </FormItemHalf>
            <FormItemHalf>
              <label for="price">Price</label>
              <input
                name="price"
                // value={size}
                // onChange={onSizeChange}
                type="text"
                ref={register}
              />
            </FormItemHalf>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemHalf>
              <label for="size">Year</label>
              <input type="text" name="year" ref={register} />
            </FormItemHalf>
            {/*<FormItemHalf>
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
            </FormItemHalf>*/}
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <label for="season">Season</label>

              <select name="season" ref={register}>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
                <option value="all seasons">All Seasons</option>
              </select>

              {/* <input type="checkbox" id="spring" value="spring" name="season" ref={register}/><span>Spring</span>
              <input type="checkbox" value="summer" name="season" ref={register}/><span>Summer</span>
              <input type="checkbox" value="fall" name="season" ref={register}/><span>Fall</span>
              <input type="checkbox" value="winter" name="season" ref={register}/><span>Winter</span>
              <input type="checkbox" value="all seasons" name="season" ref={register}/><span>All Seasons</span> */}
            </FormItemFull>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <label for="note">Note</label>
              <textarea
                name="note"
                type="text"
                ref={register}
              />
            </FormItemFull>
          </FormItemContainer>

          <FormItemContainer>
            <FormItemFull>
              <button>Add</button>
            </FormItemFull>
          </FormItemContainer>


        </form>


    </>
  )
}

export default AddItemWishlist;
