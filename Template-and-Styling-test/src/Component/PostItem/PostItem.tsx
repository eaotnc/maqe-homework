import { Post } from "../../Config/posts";

interface IPost {
  post: Post;
}

const PostItem: React.FC<IPost> = ({ post }) => {
  return <div className="post-item">{post.body}</div>;
};

export default PostItem;
