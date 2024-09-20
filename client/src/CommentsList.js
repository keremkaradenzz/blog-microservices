import axios from "axios";
import { COMMENT_URI } from "./utils";
import { useEffect, useState } from "react";

export const CommentsList = ({ userId, isSuccess }) => {
  const [comments, setComments] = useState([]);
  const getAllComments = async () => {
    const res = await axios.get(`${COMMENT_URI}/posts/${userId}/comments`);
    setComments(res.data);
  };

  useEffect(() => {
    getAllComments();
  }, [isSuccess]);

  console.log(comments);
  return (
    <div>
      {comments?.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "15px" }}>
          <label>Comment: </label>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
