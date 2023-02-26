import Content from "./components/content/Content";
import Header from "./components/header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./components/overview/Overview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route
            path="/app"
            element={
              <>
                <Header />
                <Content />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
