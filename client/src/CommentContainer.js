import axios from "axios";
import { COMMENT_URI } from "./utils";
import { useState } from "react";
import { CommentsList } from "./CommentsList";
export const CommentContainer = ({ userId }) => {
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const sendComment = async () => {
    const res = await axios.post(`${COMMENT_URI}/posts/${userId}/comment`, {
      content,
    });
    if (res.status === 201) setIsSuccess(!isSuccess);
  };
  return (
    <div style={{marginBottom: '30px', borderBottom: '1px solid black', padding: 20}}>
      <CommentsList userId={userId} isSuccess={isSuccess} />
      <label>Enter new comment</label>
      <input
        label="Enter a comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={sendComment}>Send Comment</button>
    </div>
  );
};
