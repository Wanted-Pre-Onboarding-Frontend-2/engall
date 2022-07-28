import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddClass from "../pages/AddClass";
import ViewClass from "../pages/ViewClass";
import NotFound404 from "../pages/NotFound404";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/home"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}

          <Route path="/view" element={<ViewClass />} />
          <Route path="/add" element={<AddClass />} />

          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
