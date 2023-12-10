import { ACTIONS } from './calculator.jsx';

export default function Digitbtn({dispatch, digit}){
    
    return <button className="button" onClick={()=> dispatch({type: ACTIONS.ADD_DIGIT, payload:{ digit }})} >{digit}</button>
}