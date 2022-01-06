import { Link, useNavigate } from "react-router-dom";

import "../css/Topbar.css";

export default function TopBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>

      {!localStorage.getItem("token") ? (
        <>
          <div className="topRight">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/signUp">
                  REGISTER
                </Link>
              </li>
            </ul>{" "}
          </div>
        </>
      ) : (
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          </ul>
        </div>
      )}

      <i className="topSearchIcon fas fa-search"></i>
    </div>
  );
}
