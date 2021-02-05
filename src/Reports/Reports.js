import React, { useState, useEffect } from 'react'
import { StyledH2, StyledH3 } from '../styles/Heading';
import { FlexWrapper, FlexInner, FlexItem, StyledContainerNoBg, StyledContainerMain } from '../styles/Container';
import { StyledGraph, StyledGraphLabel, StyledGraphStatus, StyledGraphPercentage } from '../styles/StyledGraph'
import { StyledContainerMiniWrapper, StyledContainerMini, StyledFlexContainerMini } from '../styles/Container'
import { StyledTypographyRight, StyledTypography } from '../styles/StyledTypography';
import {HorizontalBar, Pie} from 'react-chartjs-2';

const Reports = ({clothes, season, seasonProp, colorProp, yearProp}) => {

  const [data, setData] = useState({});
  const [yearData, setYearData] = useState({});
  const [seasonData, setSeasonData] = useState({});
  const [colorData, setColorData] = useState({});
  const [priceData, setPriceData] = useState({});
  // const [season, setSeason] = useState(['Spring', 'Summer', 'Fall',
  // 'Winter', 'All Seasons', 'unknown'])
  const [test1, setTest1] = useState([])



  // const test1 = Array.from(new Set(clothes.map(el => el.season)));
  // console.log("test1", test1)

  useEffect(() => {

      setPriceData(
        {
          labels: [...ta5],
          datasets: [
            {
              label: 'Year',
              backgroundColor: 'rgb(90, 103, 216)',
              // borderColor: 'rgba(0,0,0,1)',
              // borderWidth: 2,
              data: [...ta6],
              barThickness: 'flex'
            }
          ]
        });
      setYearData(
        {
          labels: [...yearArr2],
          datasets: [
            {
              label: 'Year',
              backgroundColor: 'rgb(90, 103, 216)',
              // borderColor: 'rgba(0,0,0,1)',
              // borderWidth: 2,
              data: [...yearArr],
              barThickness: 'flex'
            }
          ]
        });

        setSeasonData(
          {
            labels: ['Spring', 'Summer', 'Fall', 'Winter', 'All Seasons', 'N/A'],
            datasets: [
              {
                label: 'Seasons',
                backgroundColor: 'rgb(90, 103, 216)',
                // borderColor: 'rgba(0,0,0,1)',
                // borderWidth: 2,
                data: [seasonProp['spring'], seasonProp['summer'], seasonProp['fall'], seasonProp['winter'], seasonProp['all seasons'], seasonProp['N/A']],
                barThickness: 'flex'
              }
            ]
          });

          setColorData(
            {
              labels: [...colorLabelArr, 'other colors'],
              datasets: [
                {
                  label: 'Color',
                  backgroundColor: 'rgb(90, 103, 216)',
                  // borderColor: 'rgba(0,0,0,1)',
                  // borderWidth: 2,
                  data: [...colorLabelNumberArr, otherColors],
                  barThickness: 'flex'
                }
              ]
            });
          // console.log("season", season)
  }, [season, seasonProp, colorProp, yearProp])

  // 理想の形
  // [2, 41, 1, 32, 2] <- Numbers of clothes by season
  // [spring, summer, fall, winter, all seasons, not set]

  var arr = [];
  for (var color in colorProp) {
    arr.push([color, colorProp[color]]);
  }

  arr.sort(function(a, b) {
    return b[1] - a[1];
  });




  const colorLabelArr = []
  const colorLabelNumberArr = []


  const colorList = arr.slice(0, 6);
  const colorLabel = colorList.forEach(el => {
    let t = el.slice(',');
    colorLabelArr.push(t[0])
    colorLabelNumberArr.push(t[1])
  })

  // console.log("colorProp", colorProp)
  // console.log("colorLabelArr", colorLabelArr)
  // console.log("colorLabelNumberArr", colorLabelNumberArr)

  // console.log("seasonProp", seasonProp)
  // console.log("seasonProp['spring']", seasonProp['spring'])
  // // console.log("seasonProp['spring'].length", seasonProp['spring'].length)
  // if(seasonProp['spring']){
  //   console.log('seasonProp.length!!!!!!!!!!!!!!!!!!', seasonProp['spring'].length)
  //   }

const otherColors = Object.values(colorProp).slice(7).reduceRight((prev, curr) => prev + curr, 0);

    var yearPropReverse = Object.keys(yearProp).sort().reverse()
    // console.log("yearProp", yearProp)


const yearArr = Object.values(yearProp).reverse().slice(0, 5);

const yearArr2 = Object.keys(yearProp).reverse().slice(0, 5);

// console.log(persons)
// [ { name: 'Sato', age: 20 },
//   { name: 'Ito', age: 24 },
//   { name: 'Kato', age: 31 } ]

// season
// seasonProp
const newTest = season.map((season, i) => ({
  season: season[i],
  seasonProp: seasonProp[i]
}))
// console.log("newTest", newTest)
// console.log("season", season)
// console.log("seasonProp", seasonProp)
// console.log("seasonProp", seasonProp)
// console.log("seasonProp['spring']", seasonProp['spring'])
// console.log(seasonProp['spring'].length-1)
// console.log("seasonProp['spring'].length", seasonProp['spring'].length)

// if(seasonProp) {
//   console.log(seasonProp['spring'].length)
// }


// console.log("test5", test5)


// console.log("categorizeBySeason", categorizeBySeason)
// console.log("anotherRes", anotherRes)





// console.log("No.1-5 Color", t1);
// console.log("No.1-5 Color", Object.values(colorProp).sort((a, b) => b - a).slice(0, 5))
// console.log("arr", arr.slice(0, 5))


var combineCategories = function (data) {
  var res = {};

  data.forEach(function (el) {
    res[el.year] = (res[el.year])
      ? res[el.year] += +el.price
      : +el.price;
  });

  return Object.keys(res).map(function (el) {
    return {year: el, price: res[el]};
  });
}

const yearSort = combineCategories(clothes);

console.log("yearSort", yearSort)

var sorted = yearSort.sort(function IHaveAName(a, b) { // non-anonymous as you ordered...
  return b.year > a.year ?  1 // if b should come earlier, push a to end
       : b.year < a.year ? -1 // if b should come later, push a to begin
       : 0;                   // a and b are equal
});
console.log("sorted", sorted)
// console.log("sorted", sorted.slice(0, 5))

// const yearLabel = Object.keys(sorted);
const ta5 = sorted.slice(0, 5).map(el => {
  return el.year;
})
console.log("ta5", ta5)

const ta6 = sorted.slice(0, 5).map(el => {
  return el.price;
})
console.log("ta6", ta6)


  return (
  <>
    <StyledH2>Reports</StyledH2>



    {/* <StyledContainerMiniWrapper>
      <StyledContainerMini><StyledTypography><span>89</span>Outerwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Tops</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Shirts</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Suits</StyledTypography></StyledContainerMini>

      <StyledContainerMini><StyledTypography><span>89</span>Knitted</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Bottoms</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Dresses</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Shoes</StyledTypography></StyledContainerMini>

      <StyledContainerMini><StyledTypography><span>89</span>Underwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>65</span>Nightwears</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>-24</span>Accessories</StyledTypography></StyledContainerMini>
      <StyledContainerMini><StyledTypography><span>89</span>Sportswears</StyledTypography></StyledContainerMini>
    </StyledContainerMiniWrapper> */}

    <FlexWrapper>

      <FlexInner>
        <FlexItem>
        <HorizontalBar
            data={yearData}
            options={{
                title:{
                display:true,
                text:'Numbers of Purchase',
                fontSize:20,
                // corderRadius: 4
                },
                // legend:{
                // display:true,
                // position:'right'
                // }
            }}
            width={200}
            height={200}
        />
        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>


        {/* <StyledH3>Money you spend</StyledH3> */}
        <HorizontalBar
            data={priceData}
            options={{
                title:{
                display:true,
                text:'Money You Spent',
                fontSize:20,
                // corderRadius: 4
                },
                // legend:{
                // display:true,
                // position:'right'
                // }
            }}
            width={200}
            height={200}
        />
        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>
        <Pie
          data={seasonData}
          options={{
            title:{
              display:true,
              text:'Season',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width={200}
            height={200}
        />

        </FlexItem>
      </FlexInner>
      <FlexInner>
        <FlexItem>

        <Pie
          data={colorData}
          options={{
            title:{
              display:true,
              text:'Color',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          width={10}
            height={10}
        />



        </FlexItem>
      </FlexInner>

    </FlexWrapper>
  </>
  )
}

export default Reports;
