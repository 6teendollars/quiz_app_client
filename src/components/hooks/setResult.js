import { postServerData } from '../../helper/helper';
import * as Action from '../../redux/result_reducer'

export const PushAnswer = (result) => async(dispatch) =>{
	try {
		await dispatch(Action.pushResultAction(result))
	} catch (error) {
		console.log(`PushAnswer err: ${error}`);
	}

}

export const updateResult = (index) => async (dispatch) =>{
	try {
		dispatch(Action.updateResultAction(index))
	} catch (error) {
		console.log(`updateResult err: ${error}`);
	}
}

//insert user data
export const usePublishResult = (resultData) =>{
	const {result, username}=resultData;
	(async ()=>{
try {
	if(result !== [] && !username ) throw new Error("Couldn't get result......")
	await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
} catch (error) {
	console.log(error);
}
	})();

}