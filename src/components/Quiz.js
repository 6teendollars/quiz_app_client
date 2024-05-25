import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "./hooks/FetchQuestion";
// redux
import { useSelector, useDispatch } from "react-redux";
import { PushAnswer } from "./hooks/setResult";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  const [check, setCheked] = useState(undefined);

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(result);
  // });

  /*next btn event handler*/
  function onNext() {
    if (trace < queue.length) {
      //update trace value
      dispatch(MoveNextQuestion());
      // console.log("On next click");
//insert a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    //rest the value of the checked variable 
    setCheked(undefined)
  }

  /*prev btn event handler*/
  function onPrev() {
    if (trace > 0) {
      console.log("On prev click");
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setCheked(check);
  }

  //finihs quiz
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1>Application</h1>
      {/*questions */}
      <Questions onChecked={onChecked} />
      <div className="grid">
       { trace > 0 ?  <button className="btn-navigation" onClick={onPrev}>
          Prev
        </button> : <div></div>}
        <button className="btn-navigation" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
