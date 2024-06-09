import React, { useState } from "react";

export default function Comment({ postsId, currentUserImage }) {
  const [text, setText] = useState("");

  return (
    <form className="comment-form">
      <div className="flex items-center w-full gap-3 ">
        <label htmlFor="text">
          <img
            src={currentUserImage}
            alt="profile image"
            className=" cursor-pointer rounded-full w-[40px] h-[40px]"
          />
        </label>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Comment..."
            className="no-focus bg-transparent text-light-1 outline-none"
          />
        </div>
      </div>
      <button type="submit" className="comment-form_btn">
        Replay
      </button>
    </form>
  );
}
