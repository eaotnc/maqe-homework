import { Post } from "../../Config/posts";
import { users } from "../../Config/users";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./PostItem.scss";

interface IPost {
  post: Post;
}

const PostItem: React.FC<IPost> = ({ post }) => {
  const [user] = users.filter((user) => user.id == post.author_id);
  return (
    <div className="post">
      <AuthorItem user={user} createdAt={post.created_at} />
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
