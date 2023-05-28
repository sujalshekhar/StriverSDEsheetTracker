import { Circle } from "rc-progress";
import React from "react";

const Stats = (props) => {
  console.log("inside stats", props);
  return (
    <div
      className='stats-div'
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        margin: "40px 0",
        backgroundColor : 'var(--table-color',
        padding : '30px 40px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        flexWrap : 'wrap'
      }}
    >
      <div style={{ height: "130px", width: "130px", position: "relative" }}>
        <Circle
          percent={
            props.difficulty.noOfEasy !== 0
              ? (props.difficulty.easy / props.difficulty.noOfEasy) * 100
              : 0
          }
          strokeColor="#03C988"
          strokeWidth={3}
          trailColor="var(--font)"
          trailWidth={1}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{color:'var(--font)'}}>Easy</h4>
          <p style={{color:'var(--font)'}}>
            {props.difficulty.noOfEasy !== 0
              ? Math.floor(
                  (props.difficulty.easy / props.difficulty.noOfEasy) * 100
                )
              : 0}%
          </p>
        </div>
      </div>
      <div style={{ height: "130px", width: "130px", position:'relative' }}>
        <Circle
          percent={
            props.difficulty.noOfMedium !== 0
              ? (props.difficulty.medium / props.difficulty.noOfMedium) * 100
              : 0
          }
          strokeColor="#E7AB79"
          strokeWidth={3}
          trailColor="var(--font)"
          trailWidth={1}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{color:'var(--font)'}}>Medium</h4>
          <p style={{color:'var(--font)'}}>
            {props.difficulty.noOfMedium !== 0
              ? Math.floor(
                  (props.difficulty.medium / props.difficulty.noOfMedium) * 100
                )
              : 0}%
          </p>
        </div>
      </div>
      <div style={{ height: "130px", width: "130px", position:'relative' }}>
        <Circle
          percent={
            props.difficulty.noOfHard !== 0
              ? (props.difficulty.hard / props.difficulty.noOfHard) * 100
              : 0
          }
          strokeColor="#F15A59"
          strokeWidth={3}
          trailColor="var(--font)"
          trailWidth={1}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4 style={{color:'var(--font)'}}>Hard</h4>
          <p style={{color:'var(--font)'}}>
            {props.difficulty.noOfHard !== 0
              ? Math.floor(
                  (props.difficulty.hard / props.difficulty.noOfHard) * 100
                )
              : 0}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
