import React, { useEffect, useState } from 'react';
import {questionare} from './components';
//import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=multiple'

function App() {
 const [questions, setQuestions] = useState([]);

 useEffect(() => {
   fetch(API_URL)
   .then((res) => res.json())
   .then((data) => {
     setQuestions(data.results);
   });
 },
[]);
  
  
  return( 
    questions.length > 0 ? (
     <div className = "container">
      <h1 className='bg-grey-700 mb-4 font-semibold 
      p-4 text-5xl text-center '>Javascript Quiz</h1>
      <questionare >
      data={questions[0]}
      </questionare>
    </div>
      
  ) : (
    <h2 className='text-2xl text-white font-bold'>loading.....</h2>
  )
  );
}

export default App;
