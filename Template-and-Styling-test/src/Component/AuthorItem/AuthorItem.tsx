import { DateTime } from "luxon";
import { User } from "../../Config/users";
import "./AuthorItem.scss";
interface IAuthor {
  user: User;
  createdAt: string;
}

const AuthorItem: React.FC<IAuthor> = ({ user, createdAt }) => {
  const parsedDate = DateTime.fromISO(createdAt, { zone: "utc" });
  const formattedDate = parsedDate.toFormat("EEEE, MMMM d, yyyy, HH:mm");
  return (
    <div className="author">
      <img src={user.avatar_url} alt="" className="avatar" />
      <div className="name">{user.name}</div>
      <div className="content">posted on {formattedDate}</div>
    </div>
  );
};

export default AuthorItem;
