import React, { useReducer, useState } from 'react';
import Digitbtn from './digitbtn';
import Operators from './operators.jsx';
import CalcTime from './calcTime';

export const ACTIONS = {
    ADD_DIGIT: 'add_digit',
    CLEAR: 'clear',
    DELETE: 'delete',
    CHOOSE_OPERATOR: 'choose_operator',
    EVALUATE: 'evaluate'
   }

   function reducer(state, { type, payload }){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{ 
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false
                }}
                
            
            if(payload.digit === "0" && state.currentOperand === "0"){return state};
            if(payload && typeof payload.digit === 'string' && state && typeof state.currentOperand === 'string'){
                if(payload.digit === "." && state.currentOperand.includes('.')){
                    return state;
                }
            }
            
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            };
            break;
        case ACTIONS.CHOOSE_OPERATOR:
            if(state.currentOperand == null && state.prevOperand == null){
                return state
            }
            if(state.prevOperand == null){
                return{
                    ...state,
                    operation: payload.operation,
                    prevOperand: state.currentOperand,
                    currentOperand: null
                }
            }
            if(state.currentOperand == null){
                return {
                    ...state,
                    operation: payload.operation
                }
            }
            return {
                ...state,
                prevOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }
            break;
        case ACTIONS.CLEAR:
            return {};
            break;   
        case ACTIONS.EVALUATE:
            if(state.currentOperand == null || 
               state.operation == null || 
               state.prevOperand == null){
                return state
            }
            return {
                ...state,
                overwrite: true,
                prevOperand: null,
                currentOperand: null,
                operation: null,
                result: evaluate(state)
            }  
            break;
        case  ACTIONS.DELETE:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: null,
                    overwrite: false,

                }
            }
            if(state.currentOperand == null) return state
            if(state.currentOperand.length == 1){
                return{
                    ...state,
                    currentOperand: null
                }
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }
    }
    
   }
   function evaluate({currentOperand, prevOperand, operation}){
    const prev = parseFloat(prevOperand);
    const curr = parseFloat(currentOperand);

    if(isNaN(prev) || isNaN(curr)) return '';

    let computation = "";

    switch(operation){
        case "+":
            computation = prev + curr;
            break;
        case "-":
            computation = prev - curr;
            break;
        case "×":
            computation = prev * curr;
            break;
        case "÷":
            computation = prev / curr;
            break;
        case "%":
            computation = prev % curr;
            break;
    }
    return computation.toString();
   }

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us',{
    maximumFractionDigits: 0,
})

function numberFormatter(operand){
 if(operand == null) return;
 const [ineteger, decimal] = operand.split('.')
 if(decimal == null) return INTEGER_FORMATTER.format(ineteger)
 return `${INTEGER_FORMATTER.format(ineteger)}.${decimal}`
}

function Calculator() {
   const [{currentOperand, prevOperand, operation, result}, dispatch] = React.useReducer(reducer, {});
   const [time, setTime] = useState(<CalcTime />)
    return ( 
        
        <div>
            <div className="calculator">
                <div className="bsContainer" id='calculator'>
                    <div className="timeScreen">
                    <p className="time">{time}</p>

                    </div>
                    <div className="calcScreen">
                        <div className="topbottomScreen">
                            <div className="topscreen">
                                    <div className='topscreenLayOut'>
                                        <p className="calcOn"> <span className='prevOperand'>{numberFormatter(prevOperand)}</span> <span className="currOperand"> {operation} {numberFormatter(currentOperand)}</span></p>
                                    </div>
                            </div>
                            <div className="bottomscreen">
                                    <p className="result">{numberFormatter(result)}</p>
                            </div>
                        </div>                       
                    </div>
                    <div className="calcBody">
                        <div className="buttons">
                            <div className="btnsrow1 btns">
                                <button className="button mainbtns" 
                                onClick={ () => dispatch({ type: ACTIONS.CLEAR }) } >C</button>

                                <Operators operation='÷' dispatch={dispatch} />
                                <Operators operation='×' dispatch={dispatch} />
                                <button className="button mainbtns" 
                                onClick={ () => dispatch({ type: ACTIONS.DELETE }) } >Del</button>
                            </div>
                            <div className="btnsrow2 btns">
                                <Digitbtn digit='7' dispatch={dispatch}/>
                                <Digitbtn digit='8' dispatch={dispatch}/>
                                <Digitbtn digit='9' dispatch={dispatch}/>
                                <Operators operation='-' dispatch={dispatch} />
                            </div>
                            <div className="btnsrow3 btns">
                                <Digitbtn digit='4' dispatch={dispatch}/>
                                <Digitbtn digit='5' dispatch={dispatch}/>
                                <Digitbtn digit='6' dispatch={dispatch}/>
                                <Operators operation='+' dispatch={dispatch} />
                            </div>
                            <div className="btnsrow4 btns">
                                <Digitbtn digit='1' dispatch={dispatch} />
                                <Digitbtn digit='2' dispatch={dispatch} />
                                <Digitbtn digit='3' dispatch={dispatch} />
                                <button className="button mainbtns span2" 
                                onClick={ () => dispatch({ type: ACTIONS.EVALUATE }) } >=</button>
                            </div>
                            <div className="btnsrow5 btns">
                                <Operators operation='%' dispatch={dispatch} />
                                <Digitbtn digit='0' dispatch={dispatch}/>
                                <Digitbtn digit='.' dispatch={dispatch}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Calculator;