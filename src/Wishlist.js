import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from './components/CardList'
import { Form, FormItemFull, FormItemHalf, Span, FormItem, FormItemContainer } from "./styles/StyledForm"
import { StyledContainerMain } from './styles/StyledContainer';
import { StyledHeadingH2 } from './styles/StyledHeading'
import { StyledTableWhishlist } from './styles/StyledTable';
import { StyledButtonMini } from './styles/StyledButton';

const Wishlist = ({ id }) => (
  <div>
    <StyledHeadingH2>Wishlist</StyledHeadingH2>
    <StyledContainerMain type="padding">
      <StyledTableWhishlist>
        <tr>
          <th></th>
          <th></th>
          <th>Quantity</th>
          <th>In Closet</th>
          <th>Added</th>
          <th></th>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>
          <td>1</td>
          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>
          <td>1</td>
          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>
          <td>1</td>
          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>
          <td>1</td>
          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>
          <td>1</td>
          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>


      </StyledTableWhishlist>

      <StyledButtonMini>Add Item to Wishlist</StyledButtonMini>

    </StyledContainerMain>
  </div>
)

export default Wishlist;
