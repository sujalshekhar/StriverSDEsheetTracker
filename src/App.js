import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllQuestions from "./components/AllQuestions";
import { data } from "./data/data1";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Star from "./components/Star";

for (let topic in data) {
  for (let subTopic in data[topic]) {
    let singleQn = data[topic][subTopic];
    data[topic][subTopic] = singleQn.map((qn) => {
      return { ...qn, star: false, mainTopic: topic, text: "" };
    });
  }
}

if (localStorage.getItem("data") === null) {
  localStorage.setItem("data", JSON.stringify(data));
}

function App() {
  const [qnData, setQnData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(qnData));
  }, [qnData]);

  // const [qnData, setQnData] = useState(data);
  const dataChangeHandler = (data) => {
    const type = data.type;
    const idx = data.idx;
    const topic = qnData[type][idx];

    for (let i = 0; i < topic.length; i++) {
      if (topic[i].id === data.id) {
        topic[i].brute = data.brute;
        topic[i].better = data.better;
        topic[i].optimal = data.optimal;
        topic[i].star = data.star;
        topic[i].text = data.text;
        console.log("helllllo", topic);
        break;
      }
    }

    const temp = {
      ...qnData[type],
      [idx]: topic,
    };

    setQnData((prev) => {
      return {
        ...prev,
        [type]: temp,
      };
    });
  };

  let temp = [];

  for (let key in qnData) {
    temp.push(
      <Route
        path={`/${key}`}
        element={
          <AllQuestions
            onChangeData={dataChangeHandler}
            type={key}
            topic={qnData[key]}
          />
        }
      />
    );
  }

  // star component :
  const starQnsChangeHandler = (data) => {
    let temp = {};
    let qn = qnData[data.mainTopic][data.idx];
    for (let singleQn in qn) {
      if (qn[singleQn].id === data.id) {
        console.log("true");
        qn[singleQn].brute = data.brute;
        qn[singleQn].better = data.better;
        qn[singleQn].optimal = data.optimal;
        qn[singleQn].star = data.star;
        qn[singleQn].text = data.text;
        break;
      }
    }
    temp = {
      ...qnData[data.mainTopic],
      [data.idx]: qn,
    };
    setQnData((prev) => {
      return {
        ...prev,
        [data.mainTopic]: temp,
      };
    });
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={qnData} />} />
        {temp.map((data) => data)}
        <Route
          path="/star"
          element={<Star data={qnData} onChangeData={starQnsChangeHandler} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
