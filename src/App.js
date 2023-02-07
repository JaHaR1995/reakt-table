import React from 'react';
import Cards from './Components/Card/Cards';
import products from './Components/Card/Arr';

function App() {
  console.log(products);
  return (
    <>
      <table border={1}>
        <tbody>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>left</th>
          </tr>
        {products.map(elem => <Cards  img={elem.image} name={elem.name} price= {elem.price} left={elem.left} />)}   
        </tbody>
      </table> 
    </>
  )
                   
}

export default App;  
