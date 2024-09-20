import axios from "axios";
import { POST_URI } from "./utils";
import { useEffect, useState } from "react";
import { CommentContainer } from "./CommentContainer";

export const PostContainer = ({ isSuccess }) => {
  const [posts, setPosts] = useState({});
  const getAllPost = async () => {
    const res = await axios.get(`${POST_URI}/posts`);
    setPosts(res.data);
  };

  useEffect(() => {
    getAllPost();
  }, [isSuccess]);

  return (
    <div>
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>

          <CommentContainer userId={post.id} />
        </div>
      ))}
    </div>
  );
};
