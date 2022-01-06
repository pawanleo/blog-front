import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/Topbar";
import SignUp from "./Components/SignUp";
import Allposts from "./Components/Allposts";
import Login from "./Components/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Write from "./Components/Write";
import Viewpost from "./Components/Viewpost";
import AddPost from "./Components/AddPost";
import EditPost from "./Components/EditPost";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <TopBar />

          <Routes>
            <Route exact path="/" element={<Allposts/>}/>
       
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/viewpost" element={<Viewpost/>}/>
            <Route
              exact
              path="/write"
              element={
                <ProtectedRoutes>
                  <Write/>
                </ProtectedRoutes>
              }
            />
            <Route
              exact
              path="/addpost"
              element={
                <ProtectedRoutes>
                  <AddPost />
                </ProtectedRoutes>
              }
            />
            <Route
              exact
              path="/editpost"
              element={
                <ProtectedRoutes>
                  <EditPost/>
                </ProtectedRoutes>
              }
            />

        
              
           
          </Routes>
         
        </div>
      </Router>
    </div>
  );
}

export default App;
