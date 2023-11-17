import React, { useState } from 'react';
import CommentButton from './commentArea.jsx';

function LikeThumb() {
  // Regular javaScript code below this line
  let [ count, setCount ] = React.useState(0)

  function likeCount(){
    setCount(count += 1)
  }
 let  sup = <sup>{count}</sup>

 // JSX code only below this zone
  return (
    <div className="LikeThumb"> 
      <button className="btn btn-primary" onClick={likeCount}>Like {sup}</button>
      <button className="btn btn-danger">Share</button>
      <CommentButton />
    </div>
);
}

export default LikeThumb;