import React, {useRef, useEffect, useState} from 'react'
import Title from '../layouts/Title'
import * as qna from "@tensorflow-models/qna"
import * as tf from '@tensorflow/tfjs'

const BGbot = () => {
  // 3. Setup references and state hooks
  const questionRef = useRef(null)
  const [answer, setAnswer] = useState()
  const [model, setModel] = useState(null)

  // 4. Load Tensorflow Model
  const loadModel = async () => {
    const loadedModel = await qna.load()
    setModel(loadedModel)
    console.log('Model loaded.')
  } 

  // 5. Handle Questions
  const answerQuestion = async (e) => {
    console.log(questionRef.current.value)
    if (model !== null) {
      console.log(questionRef.value)
      const answers = await model.findAnswers(questionRef.current.value, "Bhavesh is an experienced web developer")
      if(answers.length > 0) setAnswer(answers)
      else {
        let arr = [{text: "Sorry, I don't remember this information T_T"}]
        setAnswer(arr)
      }
      console.log("answer: ")
      console.log(answers)
    }  
  }

  useEffect(()=>{loadModel()}, [])

  // 2. Setup input, question and result area
  return (
    <section
        id="BGbot"
        className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Ask About Me !" des="BG BOT" />
      </div>
      <div className="w-full flex justify-center items-center h-auto">
        <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
          <div className="flex flex-row w-full text-center">
            <input ref={questionRef} type="text" id="question" className="contactInput" />
            <button onClick={answerQuestion} className="h-12 w-10 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent ml-5"> Ask </button>
          </div>
          <p>{answer ? answer.map((ans, idx) =><p key={idx}><b>Answer {idx+1} - </b> {ans.text} ({Math.floor(ans.score*100)/100})</p>) : ""}</p>
        </div>
      </div>
    </section>
  );
}

export default BGbot
