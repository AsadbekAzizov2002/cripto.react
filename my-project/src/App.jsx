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
        <div>
          <h1>ETH</h1>
          <div>
            <h1>BTC: {data.ETH.BTC}</h1>
            <h1>USD: {data.ETH.USD}</h1>
            <h1>EUR: {data.ETH.EUR}</h1>
          </div>
          <h1>DASH</h1>
          <div>
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