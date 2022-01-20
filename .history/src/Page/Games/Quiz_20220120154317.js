import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import axios from 'axios'
import GameOver from './GameOver';
import * as FaIcons from 'react-icons/fa';
import Helmet from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #2196f3;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #e3f2fd;
    background-color: #2196f3;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #0d47a1;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            .catch(err => console.error(err))

    }, []);


    return (
<>
    <div>
            <Helmet>
            <title>ConquError | Puzzle</title>
            <meta name="description" content="ConquError Games page" />
            </Helmet>
        </div>

        <Navbar/>
        
        <div className="mt-5"></div>

        <Link to="/games" style={{ textDecoration: 'none',marginLeft: '10px', marginTop: '2px' }} className="mt-5"><FaIcons.FaArrowLeft/> Back</Link>
        <QuizWindow>
        <h1 className="text-center text-secondary fw-bold mb-5">ConQuiz</h1>
            { quiz[number] &&

                <>
                    <Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

                    <Options>
                        {quiz[number].options.map((item, index) => (
                            <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></Option>
                        ))}
                    </Options>
                </>

            }
            {
                number === 5 && <GameOver pts={pts} />
            }
        </QuizWindow>
</>

    )
}

export default Quiz