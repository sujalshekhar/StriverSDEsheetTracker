import React from "react";
import { useState } from "react";
import './IndividualQuestion.css'
import { Button, Modal } from "@mui/material";
import ModalComponent from './Modal';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Gfg from "./Gfg";
import LeetCode from "./LeetCode";

const IndividualQuestion = (props) => {
  const [bruteChecked, setBruteChecked] = useState(props.question.brute);
  const [betterChecked, setBetterChecked] = useState(props.question.better);
  const [optimalChecked, setOptimalChecked] = useState(props.question.optimal);
  const [starChecked, setStarChecked] = useState(props.question.star);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(props.question.text);

  const bruteCheckedHandler = () => {
    setBruteChecked((prev) => {
      const temp = {
        idx: props.idx,
        id: props.question.id,
        brute: !prev,
        better: betterChecked,
        optimal: optimalChecked,
        star : starChecked,
        mainTopic : props.question.mainTopic,
        text : notes
      };
      console.log('inside ind qn', temp);
      props.onChangeOption(temp);
      return !prev;
    });
  };

  const betterCheckedHandler = () => {
    setBetterChecked((prev) => {
      console.log(starChecked, 'inside star check');
      const temp = {
        idx: props.idx,
        id: props.question.id,
        brute: bruteChecked,
        better: !prev,
        optimal: optimalChecked,
        star : starChecked,
        mainTopic : props.question.mainTopic,
        text : notes
      };
      props.onChangeOption(temp);
      return !prev;
    });
  };

  const optimalCheckedHandler = () => {
    setOptimalChecked((prev) => {
      const temp = {
        idx: props.idx,
        id: props.question.id,
        brute: bruteChecked,
        better: betterChecked,
        optimal: !prev,
        star : starChecked,
        mainTopic : props.question.mainTopic,
        text : notes
      };
      console.log('indQn', temp);
      props.onChangeOption(temp);
      return !prev;
    });
  };

  const starCheckedHandler = () => {
    setStarChecked((prev) => {
      const temp = {
        idx: props.idx,
        id: props.question.id,
        brute: bruteChecked,
        better: betterChecked,
        optimal: optimalChecked,
        star : !prev,
        mainTopic : props.question.mainTopic,
        text : notes
      };
      props.onChangeOption(temp);
      return !prev;
    })
  }

  const notesSetHandler = (data) => {
    setNotes(() => {
      const temp = {
        idx: props.idx,
        id: props.question.id,
        brute: bruteChecked,
        better: betterChecked,
        optimal: optimalChecked,
        star : starChecked,
        mainTopic : props.question.mainTopic,
        text : data
      };
      console.log(data);
      props.onChangeOption(temp);
      return data;
    })
  }

  const flag = props.question.brute && props.question.better && props.question.optimal;

  return (
    <tr style={{border:(props.question.star)?'':'',backgroundColor:(flag)&&'#00917c'}} className="qn-row">
      <td className="star"><input type="checkbox" checked={props.question.star} onChange={starCheckedHandler}></input></td>
      <td className="qn">{props.question.qnTitle}</td>
      <td className="chekbox">
        <input
          type="checkbox"
          name="brute"
          checked={props.question.brute}
          onChange={bruteCheckedHandler}
        />
      </td>
      <td className="chekbox">
        <input
          type="checkbox"
          name="better"
          checked={props.question.better}
          onChange={betterCheckedHandler}
        />
      </td>
      <td className="chekbox">
        <input
          type="checkbox"
          name="optimal"
          checked={props.question.optimal}
          onChange={optimalCheckedHandler}
        />
      </td>
      {
        (props.question.gfg!==null) ? <td style={{textAlign:'center'}}><a target='_blank' href={props.question.gfg}><Gfg /></a></td> : <td></td>
      }
      {
        (props.question.leetcode!==null) ? <td style={{textAlign:'center'}}><a target='_blank' href={props.question.leetcode}><LeetCode /></a></td> : <td></td>
      }

      <td className="edit-notes"><EditNoteIcon style={{color:'var(--font)'}} onClick={() => setIsModalOpen(!isModalOpen)} /></td>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <ModalComponent data={props.question} onCloseModal={() => setIsModalOpen(false)} onGetNotes={notesSetHandler} />
      </Modal>
    </tr>
  );
};

export default IndividualQuestion;
