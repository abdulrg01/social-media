import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";

export default function ProfileHeader({
  username,
  name,
  imgUrl,
  cover,
  bio,
  item1,
  item2,
  item3,
}) {
  const [community, setCommunity] = useState(false);
  const router = useRouter();

  const divStyle = {
    // height: "50%",
    position: "relative",
  };

  const style = {
    width: "100%",
    margin: " 0 auto",
    backgroundImage: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" h-[50%] relative">
      <div
        style={style}
        className="p-3 flex justify-between rounded-t-2xl relative min-h-56"
      >
        <div
          onClick={() => router.push("/communities")}
          className="w-8 h-8 rounded-full bg-gray-900/40 flex justify-center items-center cursor-pointer"
        >
          <AiOutlineArrowLeft className="w-6 h-6 text-light-1" />
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-8 h-8 bg-gray-900/40 flex justify-center items-center rounded-full cursor-pointer">
            <AiOutlineSearch className="w-6 h-6 text-light-1" />
          </div>
          <div
            onClick={() => setCommunity((prev) => !prev)}
            className="w-8 h-8 text-light-1 bg-gray-900/40 flex justify-center items-center rounded-full cursor-pointer"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </div>

          {/* Hamburger */}
          {community && (
            <div className="z-10 absolute top-14 right-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    {/* Report Community */}
                    {item1}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-1400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    {/* About Community */}
                    {item2}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-red-700 dark:text-red-700 hover:bg-red-100 dark:hover:bg-red-800 dark:hover:text-white"
                  >
                    {/* Leave Community */}
                    {item3}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className=" absolute -bottom-11 bg-black rounded-full h-20 w-20">
          <img
            src={imgUrl ? imgUrl : "/user.svg"}
            alt="profile"
            className="border-4 border-black rounded-full h-20 w-20"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-14">
          <h2 className=" text-body-semibold text-gray-300 mb-1">{name}</h2>
          <p className=" text-small-semibold text-light-3">@{username}</p>
        </div>
        <p className="mt-4 max-w-lg text-small-medium text-gray-300">{bio}</p>
      </div>
    </div>
  );
}
