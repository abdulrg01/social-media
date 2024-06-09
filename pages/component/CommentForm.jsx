import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { user } from "../../constants";
import { MdOutlineCancel } from "react-icons/md";

export default function CommentForm() {
  const [posts, setPosts] = useState({
    text: "",
    img: null,
  });
  const [items, setItems] = useState({
    text: "",
    img: null,
  });

  const imageRef = useRef(null);
  const pathname = usePathname();

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

  const postsHandler = async (e) => {
    e.preventDefault();

    setItems({
      text: posts.text,
      img: posts.img,
    });

    setPosts({
      text: "",
      img: null,
    });
  };

  return (
    <>
      <form
        className={`mb-8 link ${pathname !== "/" ? "hidden" : ""}`}
        onSubmit={postsHandler}
      >
        <div class="w-[420px] mb-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-950 dark:border-gray-600">
          <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src={user.profilePic}
                    alt="user"
                  />
                </button>
                <div
                  onClick={() => imageRef.current.click()}
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                  <span class="sr-only">Upload image</span>
                </div>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                    />
                  </svg>
                  <span class="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span class="sr-only">Embed map</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                  </svg>
                  <span class="sr-only">Format code</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                  </svg>
                  <span class="sr-only">Add emoji</span>
                </button>
              </div>
              <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                    />
                  </svg>
                  <span class="sr-only">Add list</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                    <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                  </svg>
                  <span class="sr-only">Timeline</span>
                </button>
                <button
                  type="button"
                  class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Download</span>
                </button>
              </div>
            </div>
          </div>
          <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-950">
            <label for="editor" class="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              value={posts.text}
              onChange={(e) => setPosts({ ...posts, text: e.target.value })}
              rows="3"
              class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-950 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a posts..."
              required
            />

            <input
              type="file"
              ref={imageRef}
              className="hidden"
              onChange={postsImage}
              accept="image/png,image/jpg,image/jpeg,image/webp"
            />

            {posts.img && (
              <div className="relative -mt-5">
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
            )}
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#1D9BF0] rounded-full focus:ring-4 focus:ring-blue dark:focus:ring-blue hover:bg-blue"
        >
          Publish post
        </button>

        {items.img !== null && items.text !== "" && (
          <article className="flex w-full flex-col rounded-xl mt-5 border border-gray-200 dark:bg-gray-950 dark:border-gray-600 bg-dark-2 pb-7 pt-1">
            {/* className="flex w-[420px] flex-col items-center rounded-xl" */}
            <div className="flex flex-col">
              <div className="p-5">
                <div className="flex items-start justify-between relative">
                  <Link
                    className="flex flex-row gap-3"
                    href={`/profile/author123`}
                  >
                    <img
                      src="/user.svg"
                      alt="profile image"
                      className=" cursor-pointer w-8 h-8 rounded-full"
                    />
                    <div>
                      <h4 className=" cursor-pointer text-base-semibold text-light-1">
                        Onboarding
                      </h4>
                    </div>
                  </Link>
                </div>
                <p className="mt-5 text-small-regular text-light-2">
                  {items.text}
                </p>
              </div>

              {items.img && (
                <img src={items.img} alt="post" className="w-full h-full" />
              )}

              <div className="mt-5 flex flex-col gap-3 mx-5">
                <div className="flex gap-3.5">
                  <img
                    src="/heart-gray.svg"
                    alt="heart"
                    width={20}
                    height={20}
                    className=" cursor-pointer object-contain"
                  />
                  <Link href={`/postsInfo/author123`}>
                    <img
                      src="/reply.svg"
                      alt="replay"
                      width={20}
                      height={20}
                      className=" cursor-pointer object-contain"
                    />
                  </Link>
                  <img
                    src="/repost.svg"
                    alt="repost"
                    width={20}
                    height={20}
                    className=" cursor-pointer object-contain"
                  />
                  <img
                    src="/share.svg"
                    alt="share"
                    width={20}
                    height={20}
                    className=" cursor-pointer object-contain"
                  />
                </div>
              </div>
            </div>
          </article>
        )}
      </form>
    </>
  );
}
