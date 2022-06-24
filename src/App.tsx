import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CountryPage } from "./Components/Exercise/WhereWorld/pages/CountryPage";
import { listRouter } from "./Components/Router/Router";

function App() {
  return (
    <div className="All">
      <Routes>
        {listRouter.map((item, index) => (
          <Route key={index} path={item.path} element={item.element}></Route>
        ))}
        <Route path={`/world/:name`} element={<CountryPage />}></Route>
        <Route path={`/code/:code`} element={<CountryPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
