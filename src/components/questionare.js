import React from 'react';

const Button = ({ answer, className }) => (
    
);

const Questionare = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers }
}) => {
    const shuffleAnswer = [correct_answer, ...incorrect_answers].sort(() =>
        Math.random() - 0.5
    );

    return (

        <div>
            <div className='bg-white text-blue-800 p-10
      rounded-lg font-semibold shadow-md'>
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question }} >
                </h2>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                {shuffleAnswers.map(answer => (
                    <Button className={correct_answer ===
                        answer ? 'bg-purple-300' : ''
                    }
                        onClick={() => handleAnswer
                            (answer)}
                        answer={answer} />

                    <button className={`${correct_answer === answer ? `bg-purple-300' : 'bg-white'}  
                    p-4 text-purple-800 
                    font-semibold rounded shadow`}>
                    onClick={() => handleAnswer
                     (answer)}>
                     {answer}
                    </button>
               ))}

            </div>
        </div>
    );
};

export default Questionare;


