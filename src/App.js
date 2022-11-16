import { useState } from "react";
import { Aside } from "./Components/Aside/Aside";
import { PointsContext } from "./Components/PointsContext";
import { Maps } from "./Components/Maps/Maps";
import { CustomCircle } from "./Components/CustomCircleContext";


function App() {
  const [points, setPoints] = useState({
    mode: 'Model1',
    Postamats: null
  })
  const [customCircle, setCustomCircle] = useState(null)

  return (
    <>
      <CustomCircle.Provider value={{ customCircle, setCustomCircle }} >
        <PointsContext.Provider value={{ points, setPoints }}>
          {/* Компонент бокового меню */}
          <Aside />
          {/* Компонент карты */}
          <Maps />
        </PointsContext.Provider>
      </CustomCircle.Provider>
    </>
  );
}

export default App;
