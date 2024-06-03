import React from 'react'
import './styles/Questions.css'
import {useState} from 'react';
import { SlArrowDown } from 'react-icons/sl';

const Questions = ({query}) => {
    
    const [showAnswer, setshowAnswer] = useState(false);
    let answers = query.answer;



  return (
    <section className='background_card'>
        <div className='box'>
        <h3 >
            <span className='question_FAQ'>
            {query.question}
            </span>
            <span className='button_FAQ'>
                <button onClick={() => setshowAnswer((prevState) => !prevState)}> 
                    < SlArrowDown className='icon_dropdown'/>
                </button>
            </span>
        </h3>
        </div>
        { showAnswer && <h4 className='answer_FAQ'>{query.answer}</h4>  }
    </section>
  )
}

export default Questions