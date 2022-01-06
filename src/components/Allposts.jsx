import React from "react";
import { Link } from "react-router-dom";
import "../css/Posts.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Allposts = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getPosts = () => {
    axios.get("http://localhost:9001/api/blog").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Header />{" "}
      {data.map((ele) => (
        <div className="post">
          <img
            className="postImg"
            src="https://source.unsplash.com//385x280/?trees"
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              <span> {ele.author.toUpperCase()} </span>
            </div>
            <span
              className="postTitle"
              onClick={() => navigate("/viewpost", { state: { data: ele } })}
            >
              <Link to="/viewpost" className="link">
                {ele.title.toUpperCase()}
              </Link>
            </span>

            <span className="postDate">
              {" "}
              {new Date(ele.time).toLocaleString().slice(0, 25)}
            </span>
          </div>
          <p className="postDesc">{ele.post}</p>
        </div>
      ))}
    </div>
  );
};

export default Allposts;
