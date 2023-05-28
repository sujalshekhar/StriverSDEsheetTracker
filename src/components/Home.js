import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import IndividualTopic from "./IndividualTopic";
import { useState, useEffect } from "react";
import { Line } from "rc-progress";

const Home = (props) => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme") === "true"
      : false
  );

  useEffect(() => {
    localStorage.setItem("theme", dark.toString());
    dark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [dark]);

  let temp = [];

  let numberOfQnsSolved = 0;
  let totalNumberOfQns = 0;

  for (let key in props.data) {
    for (let innerKey in props.data[key]) {
      for (let qn of props.data[key][innerKey]) {
        if (qn.brute && qn.better && qn.optimal) {
          numberOfQnsSolved++;
        }
        totalNumberOfQns++;
      }
    }
  }

  let percentageOfQnsSolved =
    totalNumberOfQns !== 0 ? (numberOfQnsSolved / totalNumberOfQns) * 100 : 0;

  console.log("percent", percentageOfQnsSolved);

  for (let key in props.data) {
    temp.push([
      <Link
        className="topic-heading-link"
        style={{ textDecoration: "none", color: "var(--font-color-1)" }}
        to={`/${key}`}
      >
        <h3 style={{ display: "flex", cursor: "pointer", padding: "10px" }}>
          {key}
        </h3>
      </Link>,
      key,
    ]);
  }

  return (
    <div className="home">
      <div className="home-banner">
        <div className="overlay">
          <div className="left-heading">
            <h1>Striver A2Z DSA Course/Sheet</h1>
            <h3>Track Your DSA Preparation.</h3>
            <div
              style={{
                width: "max-content",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%", margin: "0" }}>
                <button className="start">
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="#topics"
                  >
                    Start Now
                  </a>
                </button>
                <button className="theme-btn" onClick={() => setDark(!dark)}>
                  {dark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
              <Link className="btn-star" to="/star">
                Starred Questions
              </Link>
            </div>
          </div>
        </div>
        <div className="second-image"></div>
      </div>
      <div className="overall-progress">
        <Line
          percent={percentageOfQnsSolved}
          strokeLinecap="square"
          trailWidth={2}
          strokeWidth={2}
          trailColor="var(--progress-bar-trail-color)"
        />
      </div>
      <h1 id="topics" className="topics-h1">
        Topics
      </h1>
      <div className="all-topics">
        {temp.map((data) => {
          return (
            <IndividualTopic
              ele={data[0]}
              key={data[1]}
              data={props.data[data[1]]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
