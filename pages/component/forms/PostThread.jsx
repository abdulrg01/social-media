import React, { useState } from "react";

export default function PostThread({ onboarded }) {
  const [post, setPost] = useState("");

  return (
    <>
      <form className="flex flex-col justify-start gap-7">
        <div className="flex flex-col w-full gap-3 ">
          <label htmlFor="post" className="text-base-semibold text-light-2">
            post
          </label>
          <div>
            <textarea
              rows={10}
              type="text"
              name="post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              id="post"
              className="account-form_input no-focus"
            />
          </div>
        </div>
        <button type="submit" className="bg-primary-500 p-2.5">
          Submit
        </button>
      </form>
    </>
  );
}
