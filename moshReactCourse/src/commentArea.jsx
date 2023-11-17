import React, { useState } from 'react';


function CommentButton(){
   let [isCommenting, setIsCommenting] = React.useState(false)
   let [commentText, setCommentText] = React.useState('')
   let [commentCount, setCommentCount] = React.useState(0)

    // set function to handle comment click
    function handleCommentClick(){
        setIsCommenting(true)
    }
    // handle the comment text for save and update
    function handleCommentSave(){
        setCommentCount(commentCount +1)

        // Reset the comment state after been saved
        setIsCommenting(false)
        setCommentText('')
    }

    // get the value of the text in the comment
    function handleCommentChange(event){
        setCommentText(event.target.value)
    }

    // make a button to exit the comment  box
    function handleExit(){
        setIsCommenting(false)
        setCommentText('')
    }

    return(
        <>
            <button type="button" onClick={handleCommentClick} className='btn btn-success'>Comment <sup>{commentCount}</sup></button>
            {isCommenting && (
                <div>
                    <textarea className='text' name="comment" id="comment" value={commentText} onChange={handleCommentChange} cols="30" rows="5" />
                    <button className='text save' onClick={handleCommentSave}>save comment</button>
                    <button className='exitbtn' onClick={handleExit}>x</button>
                </div>
            )}
        </>
    )
}

export default CommentButton