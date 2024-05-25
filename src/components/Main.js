import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";


export default function Main() {

  const inputRef = useRef(null);
const dispatch = useDispatch()
  function startQuiz(){
    if(inputRef.current?.value){
dispatch(setUserId(inputRef.current?.value))
    }
  }
  return (
    <div className="container">
      <h1>Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>10 points is awarded fo the correct answer.</li>
        <li>You can review and change answers before the quiz finish.</li>
      </ol>

      <form id="form">
        <input ref={inputRef} type="text" placeholder="Username*" />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start
        </Link>
      </div>
    </div>
  );
}
