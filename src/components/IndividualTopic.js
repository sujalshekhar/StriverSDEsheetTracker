import React from "react";
import "./IndividualTopic.css";
import { Line } from "rc-progress";

const IndividualTopic = (props) => {
  let len = 0;
  let noOfQnsSolved = 0;

  for (let key in props.data) {
    len += props.data[key].length;
    for (let val of props.data[key]) {
      if (val.brute && val.better && val.optimal) {
        noOfQnsSolved++;
      }
    }
  }

  let percent = noOfQnsSolved !== 0 ? (noOfQnsSolved / len) * 100 : 0;

  return (
    <div className="individual-topic-main">
      <div className="individual-topic">{props.ele}</div>
      <div className="line">
        <Line
          className="line-progress"
          strokeWidth={2}
          trailWidth={3}
          percent={percent}
          strokeLinecap="square"
        />
      </div>
      <h4>Questions Solved : {noOfQnsSolved}</h4>
      <h4>Total Questions : {len}</h4>
    </div>
  );
};

export default IndividualTopic;
