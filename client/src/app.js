import { useState } from "react";
import axios from "axios";
import { POST_URI } from "./utils";
import styles from "./styles.css";
import { PostContainer } from "./PostContainer";
const App = () => {
  const [title, setTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSendPost = async () => {
    const res = await axios.post(`${POST_URI}/posts`, {
      title,
    });
    if (res.status === 201) setIsSuccess(!isSuccess);
  };
  return (
    <div className="container">
      <div className="form">
        <label>Post Title</label>
        <input
          label="Enter a Post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button onClick={handleSendPost}>Send post</button>
      <PostContainer isSuccess={isSuccess} />
    </div>
  );
};

export default App;
