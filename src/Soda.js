import { useState } from "react";
function Soda() {

  const [sodas, setSodas] = useState(0);

  function addSoda() {
    console.log(sodas);
    setSodas(sodas + 1);
  }

  return <div><
    h1>This is the soda page.</h1>

    <button onClick={addSoda}>Add a soda!</button>
    <p>You have {sodas} sodas!</p>
  </div>;

}

export default Soda;