import React, { useState } from 'react';
import CalcTime from './calcTime';

function Calculator() {
    const [on, setOn]=React.useState(false);
    const [equalSign, setEqualSign]=React.useState(false);
    const [figure, setFigure]=React.useState('');
    const [current, setCurrent]=React.useState(CalcTime());
    const [operator, setOperator]=React.useState('')
    
    // Handle on and off of the calculator
    function handleOnState(){
        setOn(true);
        figure !== 0 && setFigure(0);
    }
    function putOffCalculator(){
        setOn(false)
    }
    // Set the delete button
    function handleDelete(){

    }
    // Handle the state of the figures and allow multiple figure typing
    function handleFigures(event){
        const val = event.target.value;

        getVal = setFigure(figure+val+operator)
    }        

    // Trigger the eaqual sign for operatio result
    function handleEqualSign(){
        setEqualSign(!equalSign);
    }

   function handleOperaetorState(e){
    setOperator(e.target.value);
   } 

    return ( 
        
        <div>
            <div className="calculator">
                <div className="bsContainer" id='calculator'>
                    <div className="timeScreen">
                    <p className="time">{current}</p>

                    </div>
                    <div className="calcScreen">
                        <div className="topbottomScreen">
                            <div className="topscreen">
                                {on && (
                                    <div className='topscreenLayOut'>
                                        <p className="calcOn">{figure}</p>
                                    </div>
                                    
                                )}
                            </div>
                            <div className="bottomscreen">
                                {equalSign && (
                                    <>
                                    {on &&(
                                    <p className="result">= {}</p>
                                    )}
                                    </>
                                    
                                    
                                )}
                            </div>
                        </div>                       
                    </div>
                    <div className="calcBody">
                        <div className="buttons">
                            <div className="btnsrow1 btns">
                                <button className="button mainbtns" onClick={handleOnState} >C</button>
                                <button className="button mainbtns" value='÷' onClick={handleOperaetorState}>÷</button>
                                <button className="button mainbtns" value='×' onClick={handleOperaetorState}>×</button>
                                <button className="button mainbtns">Del</button>
                            </div>
                            <div className="btnsrow2 btns">
                                <button className="button" value={7} onClick={handleFigures}>7</button>
                                <button className="button" value={8} onClick={handleFigures}>8</button>
                                <button className="button" value={9} onClick={handleFigures}>9</button>
                                <button className="button mainbtns" value='-' onClick={handleOperaetorState}>-</button>
                            </div>
                            <div className="btnsrow3 btns">
                                <button className="button" value={4} onClick={handleFigures}>4</button>
                                <button className="button" value={5} onClick={handleFigures}>5</button>
                                <button className="button" value={6} onClick={handleFigures}>6</button>
                                <button className="button mainbtns" value='+' onClick={handleOperaetorState}>+</button>
                            </div>
                            <div className="btnsrow4 btns">
                                <button className="button" value={1} onClick={handleFigures}>1</button>
                                <button className="button" value={2} onClick={handleFigures}>2</button>
                                <button className="button" value={3} onClick={handleFigures}>3</button>
                                <button className="button dbcolumn mainbtns" onClick={handleEqualSign}>=</button>
                            </div>
                            <div className="btnsrow5 btns">
                                <button className="button" value='%' onClick={handleOperaetorState}>%</button>
                                <button className="button" value={0} onClick={handleFigures}>0</button>
                                <button className="button" value="." onClick={handleFigures}>.</button>
                                <button className='button off' onClick={putOffCalculator}>off</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Calculator;