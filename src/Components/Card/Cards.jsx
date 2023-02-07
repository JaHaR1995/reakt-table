import React from "react";
const Cards = (props) => {
  return (
    <tr>
       <td><img src={props.img} alt=""></img></td>
          <td>{props.name}</td>
          <td>{props.price}</td>
          <td>{props.left} </td>
                                            
    </tr>
  );
};

export default Cards;   
