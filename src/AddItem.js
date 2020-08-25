import React from 'react';
import { Form, FormItemFull, FormItemHalf, Span, FormItem, FormItemContainer } from "./styles/StyledForm"
import { StyledHeadingH2 } from './styles/StyledHeading'
import { StyledContainerMain } from './styles/StyledContainer';

const AddItem = () => (
  <>
    <StyledHeadingH2>Add Item</StyledHeadingH2>
    <StyledContainerMain>
      <Form>
        <FormItemContainer>
          <FormItemHalf>
            <label for="inline-full-name">Image</label>
            <input type="text" placeholder="" />
          </FormItemHalf>
          <FormItemHalf>
            <label for="inline-full-name">Label</label>
            <input type="text" placeholder="" />
          </FormItemHalf>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemHalf>
            <label for="color">Category</label>

            <select>
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

            </select>
            {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div> */}
          </FormItemHalf>

          <FormItemHalf>
            <label for="color">Color</label>

            <select>
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
              <option>Brown</option>
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Purple</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Ivory</option>
              <option>Navy</option>
              <option>Beige</option>
              <option>Border</option>
              <option>Stripe</option>
            </select>
            {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div> */}
          </FormItemHalf>

        </FormItemContainer>

        <FormItemContainer>
          <FormItemHalf>
            <label for="inline-full-name">Brand</label>
            <input type="text" placeholder="" />
          </FormItemHalf>
          <FormItemHalf>
            <label for="size">Price</label>
            <input type="text" placeholder="" />
          </FormItemHalf>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemHalf>
            <label for="size">Year</label>
            <input type="text" placeholder="" />
          </FormItemHalf>
          <FormItemHalf>
            <label for="">Sleeve</label>
            <input type="radio" id="long" name="sleeve" value="long" /><span>Long</span>
            <input type="radio" id="short" name="sleeve" value="short" /><span>Short</span>
            <input type="radio" id="none" name="sleeve" value="none" /><span>None</span>
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
            <textarea />
          </FormItemFull>
        </FormItemContainer>

        <FormItemContainer>
          <FormItemFull>
            <button>Add</button>
          </FormItemFull>
        </FormItemContainer>


      </Form>
    </StyledContainerMain>
  </>
)

export default AddItem;

