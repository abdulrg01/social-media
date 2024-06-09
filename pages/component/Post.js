import Link from "next/link";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const likeHandler = () => {};

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link href={``}>
              <img className="postProfileImg" src="/favicon.ico" alt="" />
            </Link>
            <span className="postUsername text-light-1">Abu Siyama</span>
            <span className="postDate text-light-1">3:44 pm</span>
          </div>
          <div className="postTopRight text-light-1">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText text-light text-light-1">
            When scraping body text, we automatically remove any scripts,
            styles,
          </span>
          <img className="postImg" src="/favicon.ico" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/favicon.ico"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/favicon.ico"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter text-light-1">
              like people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText text-light-1">50+ comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
