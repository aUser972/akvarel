import { useState } from "react";
import { Aside } from "./Components/Aside/Aside";
import { Context } from "./Components/context";
import { Maps } from "./Components/Maps/Maps";

import POSTAMATS from './TmpData.json'

function App() {
  const [points, setPoints] = useState(POSTAMATS)

  return (
    <>
      <Context.Provider value={{ points, setPoints }}>
        {/* Компонент бокового меню */}
        <Aside />
        {/* Компонент карты */}
        <Maps />
      </Context.Provider>
    </>
  );
}

export default App;
