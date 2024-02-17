import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key")
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error(error));
  }, []);
 
  return (
    <div>
      {data ? (
        <div className=' flex w-{1120px} justify-center'>
          <h1 className=' w-20 h-20 bg-red-300'>ETH</h1>
          <div className=' w-{500px} p-5 bg-green-300'>
            <h1>BTC: {data.ETH.BTC}</h1>
            <h1>USD: {data.ETH.USD}</h1>
            <h1>EUR: {data.ETH.EUR}</h1>
          </div>
          <h1 className=' w-20 h-20 bg-amber-400 ml-8'>DASH</h1>
          <div className=' w-{500px}  p-5 bg-amber-500'>
            <h1>BTC: {data.DASH.BTC}</h1>
            <h1>USD: {data.DASH.USD}</h1>
            <h1>EUR: {data.DASH.EUR}</h1>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;