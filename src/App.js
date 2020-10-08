import React, { useEffect, useState } from 'react';
import Questionare from './components/Questionare';
//import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=multiple';

function App() {
 const [questions, setQuestions] = useState([]);
const [currentQuestion, setCurrentQuestion] = useState(undefined)
 useEffect(() => {
   fetch(API_URL)
   .then((res) => res.json())
   .then((data) => {
     setQuestions(data.results);
     setCurrentQuestion(data.results[0]);
   });
 },
[]);

const handleAnswer = (answer) => {
  //checking the answer
  
  // show another question

  // change score of correct
};
  
  
  return  questions.length > 0 ? (
     <div className = "container">
      <h1 className='bg-grey-700 mb-4 font-semibold 
      p-4 text-5xl text-center '>Javascript Quiz</h1>
      <Questionare data={currentQuestion} handleAnswer={handleAnswer} />
      
    </div>
      
  ) : (
    <h2 className='text-2xl text-white font-bold'>loading.....</h2>
  );
  
}

export default App;
