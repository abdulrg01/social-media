import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Wrapper from "../component/Wrapper";
import { user } from "../../constants";
import Link from "next/link";
import { MdOutlineCancel, MdCancelScheduleSend } from "react-icons/md";

export default function index() {
  const [posts, setPosts] = useState({
    title: "",
    img: null,
  });

  const router = useRouter();
  const imageRef = useRef(null);

  const postsImage = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        const avatar = reader.result;
        setPosts({ ...posts, img: avatar });
      }
    };
  };

  return (
    <Wrapper>
      <div className="flex flex-row items-center justify-between mb-5 pb-3 border-b-[1px] border-solid border-gray-500">
        <div
          className="text-light-2 cursor-pointer"
          onClick={() => router.push("/communities")}
        >
          <MdCancelScheduleSend />
        </div>
        <div>
          <h1 className=" text-light-2 text-small-semibold">Create Group</h1>
        </div>
        <Link href="/">
          <img
            src={user.profilePic}
            className=" rounded-full h-6 w-6"
            alt="user"
          />
        </Link>
      </div>

      <form class="max-w-[500px]" onSubmit={() => router.push("/")}>
        <div class="mb-5">
          <label
            htmlFor="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Community Title
          </label>
          <input
            type="text"
            id="title"
            value={posts.title}
            onChange={(e) => setPosts({ ...posts, title: e.target.value })}
            required
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-transparent text-base focus:ring-blue focus:border-blue dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          />
        </div>

        <span
          onClick={() => imageRef.current.click()}
          class="inline-flex cursor-pointer items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-600 mb-5 rounded-lg"
        >
          Choose an Image
        </span>

        <input
          type="file"
          ref={imageRef}
          className="hidden"
          onChange={postsImage}
          accept="image/png,image/jpg,image/jpeg,image/webp"
        />

        {posts.img ? (
          <div className="relative">
            <img
              src={posts.img}
              alt="pic"
              className=" max-h-full w-full object-cover"
            />
            <div
              className="absolute top-1 right-2 bg-red-500 rounded-full"
              onClick={() => setPosts({ ...posts, img: null })}
            >
              <MdOutlineCancel />
            </div>
          </div>
        ) : (
          <img class="h-auto rounded-lg" src="/post.jpg" alt="image" />
        )}

        <button
          type="submit"
          class={`${
            posts.title === "" ? " cursor-not-allowed" : " cursor-pointer"
          } inline-flex mt-5 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#1D9BF0] rounded-lg focus:ring-4 focus:ring-blue dark:focus:ring-blue hover:bg-blue`}
        >
          Publish post
        </button>
      </form>
    </Wrapper>
  );
}
