import React, { useState } from "react";
import "./CommentSection.css";

function CommentSection(props) {
  const dateTime = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "long",
  });
  const [postComment, setPostComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = postComment;
    const newContext = {
      context: newComment,
      createdAt: Date.now().toString(),
    };
    // props.setContexts([...props.contexts, newComment])
    console.log(props.contexts);
    props.updateMarkers(props.userId, newContext);
    props.setContexts([...props.contexts]);
  }

  return (
    <div className="commentSectionContainer">
      <h3>Comments</h3>
      Comment:
      <br />
      {props.contexts.map((elem, index) => {
        return (
          <div className="post">
            User {index}: {elem.context} <br />
            <span className="dateTime">{dateTime.format(elem.createdAt)}</span>
            <br />
            <br />
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <textarea
            className="inputField"
            autoFocus
            value={postComment}
            onChange={(e) => setPostComment(e.target.value)}
          />
          <br />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(CommentSection);
