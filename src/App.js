import { Aside } from "./Components/Aside/Aside";
import { Maps } from "./Components/Maps/Maps";


function App() {
  return (
    <>
      {/* Компонент бокового меню */}
      <Aside />
      {/* Компонент карты */}
      <Maps />
    </>
  );
}

export default App;
