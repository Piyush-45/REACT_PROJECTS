import react from 'react';
import { useState } from 'react';
import QuestionsData from './data';

import SingleQuestion from './Question';

const App = ()=>{

    const [questions, setQuestions] = useState(QuestionsData);

    return(
        <main>
            <div className="container">
                <h3>Questions And Answers</h3>
                <section className="info">
                {
                    questions.map((question)=>{
                        return(
                            <SingleQuestion key={question.id}{...question}/>
                        )
                    })
                }
                </section>
            </div>
        </main>
    )
}

export default App