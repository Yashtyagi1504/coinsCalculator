import React from "react";

const Summary = ({all, coins}) => {
  return (
    <div>
      {coins.map((coin) => (
        <div>
          <h1>{coin.name}</h1>
          <p>Price:{coin.price}</p>
          {
            all.map(obj=>{
              if(obj.type.toLowerCase()==coin.name.toLowerCase()){
                return (
                  <div>
                     <p>Quantity: {obj.value} </p>
                      <p>Total Price: {obj.value * coin.price}</p>
                  </div>
              )
              }
              return null;
              })
          }
        </div>
      ))}
    </div>
  );
};

export default Summary;
