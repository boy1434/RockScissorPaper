import React from 'react'

const Box = (props) => {
  let result;
  if (
    props.name === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result == "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  console.log(result);
  return (
    <div className="box">
     <p>{props.name}</p>
     <img src={props.item && props.item.img}></img>
     <h2>{result}</h2>
    </div>
  )
}

export default Box;