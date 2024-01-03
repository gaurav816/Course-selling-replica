import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Appbar from "./Appbar";
import Course from "./Course";
import Allcourse from "./Allcourse";
import PersonCourse from "./PersonCourse";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <RecoilRoot>
          <Router>
            <Appbar />
            <Routes>
              <Route path={"/allcourse"} element={<Allcourse />} />
              <Route path={"/allcourse/:courseId"} element={<PersonCourse />} />
              <Route path={"/signin"} element={<Signin />} />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/course"} element={<Course />} />
            </Routes>
          </Router>
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
