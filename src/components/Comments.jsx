import React, { useState } from 'react';
import './Comments.css';

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            {comment}
          </li>
        ))}
      </ul>
      <div className="comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment"
        />
        <div className="button-container">
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
