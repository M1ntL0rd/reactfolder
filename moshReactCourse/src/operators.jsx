import { ACTIONS } from './calculator.jsx';

export default function Operators({dispatch, operation}){
    
    return <button className="button mainbtns" onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATOR, payload:{ operation }})} >{operation}</button>
}