import { Post } from "../../Config/posts";
import "./PostItem.scss";

interface IPost {
  post: Post;
}

const PostItem: React.FC<IPost> = ({ post }) => {
  return (
    <div className="post">
      <div className="body">
        <img className="img" src={post.image_url} alt="" />
        <div className="main-content">
          <div className="title">{post.title}</div>
          <div className="text">{post.body} </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
