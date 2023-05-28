import React from 'react'
import IndividualQuestion from './IndividualQuestion';
import './Star.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Star = (props) => {

    let starredQns = [];

    for(let topic in props.data) {
        let t = props.data[topic];
        for(let subTopic in t) {
            let temp = t[subTopic].filter((val) => val.star === true);
            starredQns = [...starredQns,...temp];
        }
    }
    
    const optionChangeHandler = (data) => {
        props.onChangeData(data);
      };

      const starredQuestions = <table className='star-div'>
      <tr>
          <th>Star</th>
          <th>Question</th>
          <th>Brute</th>
          <th>Better</th>
          <th>Optimal</th>
          <th>GfG</th>
          <th>L.C</th>
          <th>Notes</th>
      </tr>
      {
          starredQns.map((val) => {
              return <IndividualQuestion question={val} idx={val.subTopic} onChangeOption={optionChangeHandler} />
          })
      }
  </table>

  return (
    <div className='starred-main-container'>
    <h1 style={{fontFamily: "'Chakra Petch', sans-serif", color:'var(--header)'}}>Starred Questions</h1>
    <Button variant="contained" className="btn"><Link style={{textDecoration: "none", color:'white'}} to='/'>Back</Link></Button>
    {
        (starredQns.length > 0) ? starredQuestions : <h1 className='hello' style={{fontFamily: "'Playfair Display', serif", fontSize:'70px', color:'var(--header)'}}>No Starred Questions exists.</h1>
    }
    </div>
  )
}

export default Star