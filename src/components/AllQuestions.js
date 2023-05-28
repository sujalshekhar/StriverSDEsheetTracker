import React, { useState } from "react";
import IndividualQuestion from "./IndividualQuestion";
import "./AllQuestions.css";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import { Button } from "@mui/material";

const AllQuestions = (props) => {

  let easy = 0;
  let medium = 0;
  let hard = 0;
  let noOfEasy = 0;
  let noOfMedium = 0;
  let noOfHard = 0;

  const initialState = {};
  for (let key in props.topic) {
    initialState[key] = false;
  }

  for(let key in props.topic) {
    let temp = props.topic[key];
    for(let val of temp) {
      if(val.brute && val.better && val.optimal) {
        if(val.difficulty === 'easy') {
          easy++;
        }
        if(val.difficulty === 'medium') {
          medium++;
        }
        if(val.difficulty === 'hard') {
          hard++;
        }
      }
      if(val.difficulty === 'easy') {
        noOfEasy++;
      }
      if(val.difficulty === 'medium') {
        noOfMedium++;
      }
      if(val.difficulty === 'hard') {
        noOfHard++;
      }
    }
  }

  const noOfQuestions = (idx) => {
    let total = props.topic[idx].length;
    let noOfQuestionsSolved = 0;
    for(let val of props.topic[idx]) {
      if(val.brute && val.better && val.optimal) {
        noOfQuestionsSolved++;
      }
    }
    return {total, noOfQuestionsSolved};
  }

  const [clicked, setClicked] = useState(initialState);

  const optionChangeHandler = (data) => {
    const temp = {
      type: props.type,
      ...data,
    };
    props.onChangeData(temp);
    console.log('inside inddd',data);
  };

  const changeStateOfButtonHandler = (data) => {
    setClicked({ ...clicked, [data]: !clicked[data] });
  };

  const individualSubTopics = [];

  for (let ind in props.topic) {
    let numberOfQns = noOfQuestions(ind);
    individualSubTopics.push({
      ele: (
        <button className="btn-1" onClick={() => changeStateOfButtonHandler(ind)}>{`${ind} [${numberOfQns.noOfQuestionsSolved}/${numberOfQns.total}]`}</button>
      ),
      data: ind,
    });
  }

  const tableData = (
    <tr className="first-row">
    <th>Star</th>
      <th>Question</th>
      <th>Brute</th>
      <th>Better</th>
      <th>Optimal</th>
      <th>GfG</th>
      <th>L.C</th>
      <th>Notes</th>
    </tr>
  );

    const difficulty = {
      easy,
      noOfEasy,
      hard,
      noOfHard,
      medium,
      noOfMedium
    }


  return (
    <div className="all-qns-main-container">
    <h1 className="topic-heading">{props.type}</h1>
    <Stats difficulty={difficulty} />
    <Button variant="contained" className="btn"><Link style={{textDecoration: "none", color:'white'}} to='/'>Back</Link></Button>
      {individualSubTopics.map((val) => {
        return (
          <div className="all-qns-inside">
            {val.ele}
            <div className="table-container" style={{maxWidth:'100%', overflowX:'auto', width:'90%'}}>
            <table>
            {
                clicked[val.data] && tableData
            }
              {clicked[val.data] &&
                props.topic[val.data].map((x) => (
                  <IndividualQuestion
                    idx={val.data}
                    question={x}
                    onChangeOption={optionChangeHandler}
                  />
                ))}
            </table>
            </div>
          </div>
        );
      })}
      <div style={{height:'200px'}}></div>
    </div>
  );
};

export default AllQuestions;
