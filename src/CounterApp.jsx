import React, { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0); //useState : local database klo di reaload balik ke deafult value (0), array kosong, object kosong, string kosong, null, undifined.
  const [countNumber, setCountNumber] = useState(0);
  console.log("count number", countNumber);
  //naming convention

  const increment = () => {
    if (count >= 10) {
      alert("cukup bro, jangan lebih dari 10!");
    } else {
      setCount(count + 1); //gunanya merubah count menggunakan setCount sehingga gaperlu return.
    }
  };

  const incrementPlusDua = () => {
    if (count >= 10) {
      alert("cukup bro, jangan lebih dari 10!");
    } else {
      setCount(count + 2);
    }
  };

  const decrement = () => {
    console.log("count ", count);
    console.log("count > 0", count > 0);
    if (count > 0) {
      //validasi --> count > 0 maka functionya tidak berjalan karena false.
      setCount(count - 1);
    } else {
      alert("Angka tidak boleh kurang dari 0 bro!");
    }
  };

  const reset = () => {
    if (count === 0) {
      alert("Udah 0");
      return;
    }
    setCount(0);
    alert("Angka di reset kembali ke 0 yaa!");
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={incrementPlusDua}>Increment+2</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
