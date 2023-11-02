import { Post } from "../../Config/posts";
import { users } from "../../Config/users";
import { Image } from "antd";
import AuthorItem from "../AuthorItem/AuthorItem";
import "./PostItem.scss";

interface IPost {
  post: Post;
  isBlue: boolean;
}

const PostItem: React.FC<IPost> = ({ post, isBlue }) => {
  const [user] = users.filter((user) => user.id == post.author_id);
  return (
    <div
      className="post"
      style={isBlue ? { background: "#ccecff" } : { background: "#fff" }}
    >
      <AuthorItem user={user} createdAt={post.created_at} />
      <div className="body">
        <Image width={200} src={post.image_url} />
        <div className="main-content">
          <div className="title">{post.title}</div>
          <div className="text">{post.body} </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
