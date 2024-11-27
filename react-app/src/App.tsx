import Header from "./components/Header";

import "./App.css";

const menuItems = ["home", "login", "register"];

function App() {
  return (
    <>
      <Header menuItems={menuItems} />
    </>
  );
}

export default App;
