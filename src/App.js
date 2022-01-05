import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

import ViewPost from "./components/posts/ViewPost";
import AddPost from "./components/posts/AddPost";
import EditPost from "./components/posts/EditPost";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Routes>
            <Route  path="*" element={<PageNotFound />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route
              exact
              path="/viewpost"
              element={
                <ProtectedRoutes>
                  <ViewPost/>
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

            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
