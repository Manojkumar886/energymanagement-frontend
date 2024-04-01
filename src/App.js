import { Addtitle } from "./addtitle";
import { Listurldetails } from "./listurls";
import { Listuserdetails } from "./listuserdetails";
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
                <Route path="listuserdetails" exact element={<Listuserdetails />} />
                <Route path="listurls" exact element={< Listurldetails />} />
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
