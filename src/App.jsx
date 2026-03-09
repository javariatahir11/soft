import { useState } from "react";

import NotificationPanel from "./component/NotificationPanel/NotificationPanel";
import "./App.css";
import Sidebar from "./component/sidebar/sidebar";
import Home from "./component/home/home";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark layout" : "app layout"}>

      <Sidebar />

      <Home darkMode={darkMode} setDarkMode={setDarkMode} />

      <NotificationPanel />

    </div>
  );
}

export default App;