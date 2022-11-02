import { Aside } from "./Components/Aside/Aside";
import { Maps } from "./Components/Maps/Maps";


function App() {
  return (
    <>
      {/* Компонент бокового меню */}
      <Aside></Aside>
      {/* Компонент карты */}
      <Maps></Maps>
    </>
  );
}

export default App;
