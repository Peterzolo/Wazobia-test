import { Outlet } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <div className="App">
      <Outlet />
      <GlobalStyles />
    </div>
  );
};

export default App;
