import Link from "next/link";
import React from "react";
import { suggested } from "../../../constants";

export default function CommunityCard({
  img,
  title,
  members,
  id,
  flexX,
}) {

  return (
    <Link
      className={`${
        flexX
          ? "flex items-center cursor-pointer"
          : "flex items-center gap-3 cursor-pointer"
      }`}
      href={`${flexX ? `communityPosts/${id}` : `community/${id}`}`}
    >
      <div
        className={`${
          flexX ? "min-h-[100px]" : "min-h-[130px]"
        } flex flex-row gap-3 items-center justify-center`}
      >
        <img
          src={img}
          alt="photo"
          className={`${
            flexX
              ? "rounded-xl w-[80px] h-[80px]"
              : "rounded-xl w-[120px] h-[120px]"
          }`}
        />

        <div className="flex flex-col gap-4 h-full">
          <div>
            <h1 className=" font-semibold text-gray-400">{title}</h1>

            <div className="flex flex-row items-center gap-3">
              <p className=" text-gray-400">
                {members === 0 ? "No members yet" : members} Members
              </p>
              <div class="flex -space-x-3 rtl:space-x-reverse">
                {
                  suggested.map((item, index) => (
                    <div
                      class="flex -space-x-3 rtl:space-x-reverse"
                      key={index}
                    >
                      <img
                        class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src={item?.avatar?.url}
                        alt="image"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Join button */}
          {!flexX && (
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              View
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
