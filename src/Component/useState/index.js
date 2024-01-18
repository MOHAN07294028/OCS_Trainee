import React, { useEffect, useState } from "react";
import UseEffectComp from "../useEffect";

const UseStateComp = () => {
  let array = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ]; // array of objects

  const [getClickValue, setClickValue] = useState(false); //boolean
  const [getData, setData] = useState([]); //array

  const clickUseEffect = () => {
    setClickValue(true);
    setData(array);
  };

  useEffect(() => {
    console.log('Hello World')
  }, []);


  return (
    <div>
      <h1>UseState</h1>
      <button onClick={clickUseEffect}>Go To UseEffect</button>
      {getClickValue == true && <UseEffectComp getData={getData} />}
    </div>
  );
};

export default UseStateComp;
