import React from 'react';


const questionare = ({
    data: {question, correct_answer, incorrect_answers},
}) => {
    <div>
        <div className='bg-white text-blue-800 p-10
      rounded-lg font-semibold shadow-md'>
            <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }} >
            </h2>
        </div>
        <div className='grid grid-cols-2 gap-6 mt-6'>
            <button className='bg-white p-4
          text-purple-800 rounded font-semibold shadow '>
                {correct_answer}
            </button>
            <button className='bg-white p-4
          text-purple-800 rounded font-semibold shadow'>
                {incorrect_answers[0]}
            </button>
            <button className='bg-white p-4
          text-purple-800 rounded font-semibold shadow '>
                {incorrect_answers[1]}
            </button>
            <button className='bg-white p-4
          text-purple-800 rounded font-semibold shadow '>
                {incorrect_answers[2]}
            </button>

        </div>
    </div>
}
 export default questionare;


