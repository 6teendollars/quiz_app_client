// fetch question hook to  fetch api data and set value to store 
import { useEffect, useState } from "react"
// import data, {answers} from "../../database/data"
import { useDispatch } from "react-redux"

//redux action
import * as Action from '../../redux/question_reducer'
import { getServerData } from "../../helper/helper"


export const useFetchQuestion = () => {

	const dispatch = useDispatch();
	
	const [getData, setGetData] = useState({isLoading : false, apiData : [], serverError : null })
	useEffect(()=>{
		setGetData(prev => ({...prev, isLoading: true}));

		//fatch backend data
		(async () =>{
			try {
				// let question = await data;
				// console.log("Server Hostname:", process.env.REACT_APP_SERVER_HOSTNAME);
const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data);
console.log({ questions, answers });

				if(questions.length > 0){
					setGetData(prev => ({...prev, isLoading: false}));
					setGetData(prev => ({...prev, apiData: {questions, answers}}));
					//dispatch 
					dispatch(Action.startExamAction({ question: questions, answers }))

				}else{
					throw new Error("No question Avalibale")

				}
			} catch (error) {
				setGetData(prev => ({...prev, isLoading: false}));
				setGetData(prev => ({...prev, serverError: false}));
			}
		})();
	},[dispatch]);
	 
	return[getData, setGetData]
}

// MoveAction dispatch function (trace by +1)
export const MoveNextQuestion = () => async(dispatch) => {
	try {
		dispatch(Action.moveNextAction())
	} catch (error) {
		console.log(`MoveAction Dispatch function : ${error}`);
	}
}

// Prev action dispatch function (trace by -1)
export const MovePrevQuestion = () => async(dispatch) => {
	try {
		dispatch(Action.movePrevAction())
	} catch (error) {
		console.log(`PrevAction Dispatch function : ${error}`);
	}
}
