import "./App.scss";
import PostItem from "./Component/PostItem/PostItem";
import { posts } from "./Config/posts";

function App() {
  return (
    <div className="app">
      <h1>MAQE Forum</h1>
      <p>Your Current timezone is: Asia/Bangkok</p>
      {posts.map((postItem, index) => (
        <PostItem post={postItem} isBlue={index % 2 == 1} />
      ))}
    </div>
  );
}

export default App;
