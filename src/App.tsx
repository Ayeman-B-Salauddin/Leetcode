import React, { useState, useEffect } from "react";

const rs = (str: string) => {
  // let revStr = str.split("").reverse().join("");
  // return revStr;

  let resStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resStr += str[i];
  }
  return resStr;
};

const App = () => {
  const [str, setStr] = useState("");
  const [newstring, setNewstring] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStr(e.target.value);
  };

  useEffect(() => {
    const result = str && rs(str);
    setNewstring(result);
  }, [str]);

  return (
    <section className="main">
      <h2>Reverse a string!</h2>
      <body>
        <input name="string" onChange={handleChange} className="inputBox" />
      </body>
      {newstring && <article className="result">{newstring}</article>}
    </section>
  );
};

export default App;
