import { useRouter } from "next/router";
import React from "react";

export default function UserCard({ id, name, username, avatar, personType }) {
  const router = useRouter();
  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <img
          src={avatar ? avatar : "/user.svg"}
          alt="logo"
          className="rounded-full w-[40px] h-[40px]"
        />

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>

        <button
          className="user-card_btn"
          onClick={() => router.push(`/profile/${id}`)}
        >View</button>
      </div>
    </article>
  );
}
