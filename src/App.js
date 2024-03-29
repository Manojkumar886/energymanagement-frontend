import { Addtitle } from "./addtitle";
import { Loginpage } from "./loginpage";
import { Mainpage } from "./mainpage";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      {
        sessionStorage.getItem("auth") ?
          <>
            <BrowserRouter>
              <Mainpage />
              <Routes>
                <Route path='addtitle' exact element={<Addtitle />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <Loginpage />
          </>
      }
    </>
  );
}

export default App;
