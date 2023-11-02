import { Post } from "../../Config/posts";
import { users } from "../../Config/users";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./PostItem.scss";

interface IPost {
  post: Post;
}

const PostItem: React.FC<IPost> = ({ post }) => {
  return (
    <div className="post">
      <AuthorItem user={users[0]} createdAt={post.created_at} />
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
