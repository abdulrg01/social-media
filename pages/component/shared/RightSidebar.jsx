import { usePathname } from "next/navigation";
import { hostData, suggested, user } from "../../../constants";

export default function RightSidebar() {
  const pathname = usePathname();

  return (
    <section
      className={`link ${
        pathname !== "/" ? "hidden" : "custom-scrollbar rightsidebar"
      }`}
    >
      {/* first row */}
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">
        <div className="w-full p-3 !pb-0 text-light-1 flex items-center justify-between">
          <p className="text-black font-semibold tracking-wider text-[12px] dark:text-light-1">
            Sponsored
          </p>
          <p className="text-black font-bold text-[12px] dark:text-light-3">
            Create Ads
          </p>
        </div>
        <a href="">
          <img class=" rounded-t-2xl p-3" src="/image-1.jpg" alt="" />
        </a>
        <div className="w-full p-3 !pb-0 text-light-1 flex items-center justify-between">
          <p className="text-black font-semibold tracking-wider text-[12px] dark:text-light-1">
            Mc Furniture
          </p>
          <p className="text-black font-bold text-[12px] dark:text-light-3">
            fmcfurniture@gmail.com
          </p>
        </div>
        <div class="p-3">
          <a href="">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far.
          </p>
          <a
            href=""
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* second row */}

      <div class="w-full sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-950 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Live
          </h5>
          <a
            href=""
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 text-light-3"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {hostData?.map((item) => (
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={item?.img}
                      alt="image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                  <div class="inline-flex items-center font-semibold text-gray-900 dark:text-white dark:bg-[#1D9BF0] text-tiny-medium p-3 rounded-2xl cursor-pointer">
                    Join
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* third row */}

      <div class="w-fullsm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-950 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Communities
          </h5>
          <a
            href=""
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 text-light-3"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <div class="flex items-center ">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src="/background.jpg"
                  alt="image"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  BACKEND COMMUNITY
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  backend@windster.com
                </p>
              </div>
              <div class="inline-flex items-center font-semibold text-gray-900 dark:text-white dark:bg-[#1D9BF0] text-tiny-medium p-3 rounded-2xl cursor-pointer">
                View
              </div>
            </div>
            <li class="pt-3 pb-0 sm:pt-4">
              <div class="flex items-center ">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/women.jpg"
                    alt="image"
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Women in Islam
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    women@windster.com
                  </p>
                </div>
                <div class="inline-flex items-center font-semibold text-gray-900 dark:text-white dark:bg-[#1D9BF0] text-tiny-medium p-3 rounded-2xl cursor-pointer">
                  View
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Fourth row */}

      <div class="w-fullsm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-950 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Requests
          </h5>
          <a
            href=""
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 text-light-3"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {suggested &&
              suggested.map((item) => (
                <li class="pt-3 pb-0 sm:pt-4">
                  <div class="flex items-center ">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src={item.profilePic ? item.profilePic : "/user.svg"}
                        alt="profile"
                      />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.name}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.email}
                      </p>
                    </div>
                    <div class="inline-flex items-center font-semibold text-gray-900 dark:text-white bg-gray-900 dark:bg-[#1D9BF0] text-tiny-medium p-3 rounded-2xl cursor-pointer">
                      Add
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Fifth row */}
      <div class="w-fullsm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-950 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Following
          </h5>
          <a
            href=""
            class="text-light-3 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {user.following.map((item) => (
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={item.profilePic ? item.profilePic : "/user.svg"}
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.email}
                    </p>
                  </div>
                  <div class="inline-flex items-center font-semibold text-gray-900 dark:text-white dark:bg-[#1D9BF0] text-tiny-medium p-3 rounded-2xl cursor-pointer">
                    remove
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
