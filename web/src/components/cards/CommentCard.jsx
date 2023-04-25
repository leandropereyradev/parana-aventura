import dayjs from "dayjs";
import { BiEditAlt } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

const CommentCard = ({ id, user, createdAt, comment }) => {
  return (
    <div key={id} className="comment-card-container">
      <div className="comment-card-user_info-container">
        <div className="comment-card-user-container">
          <img
            src={user.image}
            alt={user.name}
            className="comment-card-user-image"
          />
          <h2>
            {user.name} {user.lastname}
          </h2>
        </div>
        <p>{dayjs(createdAt).format("D [de] MMMM [del] YYYY")}</p>
      </div>
      <p className="comment-card-p">{comment}</p>
      <div className="comment-card-icons-container">
        <BiEditAlt />
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default CommentCard;
