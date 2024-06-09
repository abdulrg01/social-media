import React, { useEffect } from "react";
import PostsCard from "../cards/PostsCard";
import { data } from "../../../constants";

export default function ThreadsTab() {

  return (
    <div className="mt-9 flex flex-col gap-10">
      {data.map((post, index) => (
        <PostsCard
          key={index}
          id={post.id}
          content={post.text}
          img={post.img}
          author={post.postedBy}
          community={post.community}
          createdAt={post.createdAt}
          comments={post?.children}
        />
      ))}
    </div>
  );
}
