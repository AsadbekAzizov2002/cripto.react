import React, { useEffect, useState } from 'react'

 const App = () => {
  const [users , setUsers] = useState ([])
  useEffect (()=>{
    console.log(users);
    fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key")
    .then((Response)=> Response.json())
    .then((data)=>setUsers(data))
  },[]) 
  return (
    <div className=' grid grid-cols-3'> 
      {users.map((user)=>{
        console.log(users);
        <div key={user.id}>
          <div key={user.id}>
            <h1>EHT</h1>
          <div>
            <h1>{user.BTC}</h1>
          </div>
          <div>
            <h1>{user.USE}</h1>
          </div>
          <div>
        <h1>{user.EUR}</h1>
          </div>
          </div>
           <div key={user.id}>
            <h1>DASH</h1>
          <div>
            <h1>{user.BTC}</h1>
          </div>
          <div>
            <h1>{user.USE}</h1>
          </div>
          <div>
        <h1>{user.EUR}</h1>
          </div>
          </div>
        </div>
      })}
    </div>
  )
}
export default App;