import React, { useState, useEffect } from 'react';
import { StyledH3 } from '../styles/Typography';
import { StyledRow, StyledRowItem } from '../styles/Grid';
import { HorizontalBar, Pie } from 'react-chartjs-2';

const Reports = ({ color, year, season, price }) => {

  // Data for colors
  const colorsList = Object.keys(color).sort(function(a, b) { return color[b] - color[a] });

  const colors = {
    topColors: colorsList.slice(0, 5),
    numOfTopColors: Object.values(color).slice(0, 5),
    numOfOtherColors: Object.values(color).slice(5, -1).reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  }
  const { topColors, numOfTopColors, numOfOtherColors } = colors;

  // Data for Number of Purchase
  const years = {
    firstSixYears: Object.keys(year).map(Number).sort((a, b) => b - a).slice(0, 6),
    numOfPurchasePerYear: Object.values(year).slice(-6).reverse()

  }
  const { firstSixYears, numOfPurchasePerYear } = years;

  // Data for price
  const prices = {
    lastSixYears: Object.keys(price).slice(-6).reverse(),
    totalAmountPerYear: Object.values(price).reverse().slice(0, 6)
  }
  const { lastSixYears, totalAmountPerYear } = prices;

  const numOfPurchase = {
    labels: [...firstSixYears],
    datasets: [
      {
        label: 'Quantity',
        backgroundColor: 'rgb(90, 103, 216)',
        data: [...numOfPurchasePerYear],
        barThickness: 'flex'
      }
    ]
  };

  const totalAmount = {
    labels: [...prices.lastSixYears],
    datasets: [
      {
        label: ['Amount'],
        backgroundColor: 'rgb(90, 103, 216)',
        data: [...prices.totalAmountPerYear],
        barThickness: 'flex'
      }
    ]
  };

  const seasonData =  {
      labels: ['Spring', 'Summer', 'Fall', 'Winter', 'All Seasons', 'N/A'],
      datasets: [
        {
          label: ['Seasons'],
          backgroundColor: 'rgb(90, 103, 216)',
          data: [season['spring'], season['summer'], season['fall'], season['winter'], season['all seasons'], season['N/A']],
          barThickness: 'flex'
        }
      ]
  };

  const colorData = {
    labels: [...topColors, 'Others'],
    datasets: [
      {
        label: 'Color',
        backgroundColor: 'rgb(90, 103, 216)',
        data: [...numOfTopColors, numOfOtherColors],
        barThickness: 'flex'
      }
    ]
  };

  return (
    <>
    <StyledH3>Reports</StyledH3>
    <StyledRow>
        <StyledRowItem className="bg-white p20 shadow">
          <HorizontalBar
            data={numOfPurchase}
            options={{
                title:{
                display:true,
                text:'Numbers of Purchase',
                fontSize:20,
              },
            }}
            width={200}
            height={200}
          />
        </StyledRowItem>

        <StyledRowItem className="bg-white p20 shadow">
          <HorizontalBar
            data={totalAmount}
            options={{
                title:{
                display:true,
                text:'Money You Spent',
                fontSize:20,
              },
            }}
            width={200}
            height={200}
          />
        </StyledRowItem>
      </StyledRow>

      <StyledRow>
      <StyledRowItem className="bg-white p20 shadow">
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
      </StyledRowItem>

      <StyledRowItem className="bg-white p20 shadow">
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
      </StyledRowItem>
    </StyledRow>
    </>
  )
}

export default Reports;
