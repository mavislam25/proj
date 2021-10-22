import React from 'react'
import Data from './data.json'
import {includes, mean} from 'lodash';

const Test = () => {
  var i=0
  var j=0;
  var f=0;
  var time=Data.data[0].priceData[0].priceDataUsd.time;
  var value=Data.data[0].priceData[0].priceDataUsd.value;
  var JAN=[];
  var JANPrice=[];
  var FEB=[];
  var FEBPrice=[];
  do {
    if (includes(time[i],"-01-")) {
      JAN[j]=time[i];
      JANPrice[j]=value[i]
      console.log(JANPrice);
      j++;
    } else if (includes(time[i],"-02-")){
      FEB[f]=time[i];
      FEBPrice[f]=value[i]
      console.log(FEBPrice);
      f++;
    }
    else {
      console.log("FEBPrice");
    }
    i++;
  }
  while (i< time.length);

    return (
        <>
        <p>{parseFloat(mean(JANPrice)).toFixed(2)}</p>
        <p>{parseFloat(mean(FEBPrice)).toFixed(2)}</p>
        </>
    )
}

export default Test
