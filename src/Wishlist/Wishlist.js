import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ListItem from '../components/ListItem'
import { Form, FormItemFull, FormItemHalf, Span, FormItem, FormItemContainer } from "../styles/StyledForm"
import { StyledH2 } from '../styles/Heading';
import { StyledTableWhishlist } from '../styles/StyledTable';
import { StyledButtonMini } from '../styles/StyledButton';

const Wishlist = ({ id, wishlist, clothes, num, limit }) => {



  const uniqueCategory = Array.from(new Set(clothes.map(cloth => cloth.category)))
  .map(category => {
    return clothes.find(cloth => cloth.category === category)
  })




  // console.log("grouped", grouped.shoes)

  // console.log("uniqueCategory", uniqueCategory.categry)

  const testtest = uniqueCategory.map(el => el.category)

  // console.log("grouped", grouped);
  // console.log("testtest", testtest);

  // const vvv = testtest.map(el => {
  //   return grouped[el].length;
  // });


// const testtest1111 = grouped.shoes.length;
// console.log("testtest1111", testtest1111)
// setNums(grouped)

// const t11 = num['shoes'];
// console.log("num", num)
// console.log("t11", t11);
// console.log(typeof t11)

// console.log("t", typeof Object.keys(num[el.category]));

//   console.log('num', num);

// const check = wishlist.map((el, i) => {
//   console.log(el.label + "->" + i + " " + typeof num[el.category])
//   //console.log(el)
// })

// const check2 = Object.entries(wishlist).map(([key, values]) => {
//   // return {[key]: values.length}
//   return {[key]: values.length}
//  })
// console.log("check2", check2)




const renderedList = wishlist.map(el => {




  // console.log("t", Object.keys(num[el.category]).length);
//  console.log("t", typeof Object.keys(num[el.category]));


    //console.log("el", num[el.category])
    // const target = num[el.category];

    // Object.keys(num[el.category]).length

    // console.log("num", num)
    // const target = num[el.category];
    //console.log("target", target, typeof target)

    // if(num.hasOwnProperty(el.cagetory)) {
    //   console.log("target", target, typeof target)
    // }

    //   console.log("target", target)
    //   console.log("target obj", Object.keys(target).length)
    // }

    // const ifif = function() {
    //   if(num.hasOwnProperty(el.cagetory)) {
    //     console.log("target", num[el.cagetory])
    //     <p>{num[el.cagetory]}</p>
    //   }
    // }



    // const newNum = num.map(el => el)
    // console.log("num", typeof num)
    // console.log("num",  num)

    // console.log("target", target)
// console.log("target obj", Object.keys(target))

      // if(typeof target !== 'undefined') {
      //   {Object.keys(num[el.category]).length}
      // }

        // console.log("pico", Object.keys(num))

        console.log("wishlist", el.id)

    return (
      <>
        <tr>
          <td><Link to={`/wishlist/${el.id}`}><img src={el.image} alt={el.label} /></Link></td>
            <td><Link to={`/wishlist/${el.id}`}>{el.label}</Link></td>
            <td>{el.category}</td>
            <td>
            {num[el.category] !== undefined ? num[el.category].length : '0'}
            </td>
            <td>{limit[el.category]}</td>
            {/* <td>07/31/2020</td> */}
            {/* <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            </td> */}
        </tr>
      </>
      )

  })


  return (
  <>
    <StyledH2>Wishlist</StyledH2>



      <StyledTableWhishlist>
        <tr>
          <th></th>
          <th></th>
          <th>Category</th>
          <th>In Closet</th>

          <th>Limit</th>
        </tr>
        {renderedList}
        {/* <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>

          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>

          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>

          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>

          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr>
        <tr>
          <td><Link to={`/wishlist/${id}`}><img src="https://ae01.alicdn.com/kf/HTB1BQPcEkCWBuNjy0Faq6xUlXXab.jpg_q50.jpg" alt="stew" class="" /></Link></td>
          <td><Link to={`/wishlist/${id}`}>Outerwear</Link></td>

          <td>30</td>
          <td>07/31/2020</td>
          <td><svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
          </td>
        </tr> */}


      </StyledTableWhishlist>

      <StyledButtonMini>
      <Link to={`/addItemWishlist`}>
      Add Item to Wishlist
        </Link>


        </StyledButtonMini>


  </>
   )
}

export default Wishlist;
