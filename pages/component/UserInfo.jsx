import React, { useState } from "react";
import ProfileHeader from "./shared/ProfileHeader";
import { profileTabs, user } from "../../constants";
import ThreadsTab from "./shared/ThreadsTab";
import Wrapper from "./Wrapper";
import Link from "next/link";

export default function UserInfo() {
  const [item, setItem] = useState("");
  const [profile, setProfile] = useState(false);

  return (
    <div>
      <div class="flex flex-wrap justify-between items-center py-2.5 max-w-[1000px] mx-auto">
        <div class="flex justify-start items-center">
          <Link href="/" class="flex items-center mr-2">
            <img src="/logo.png" class="mr-3 h-8" alt="Logo" />
            <p className="text-light-1 head-text">Activity</p>
          </Link>
          <form action="#" method="GET" class="hidden lg:block lg:pl-2">
            <label for="topbar-search" class="sr-only">
              Search
            </label>
            <div class="relative mt-1 lg:w-80">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />{" "}
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                class="bg-gray-50 text-gray-900 sm:text-sm rounded-full focus:transparent focus:border-transparent block w-full pl-9 p-2.5 dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:transparent dark:focus:border-transparent"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div class="flex items-center lg:order-2">
          <button
            type="button"
            class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            <span class="sr-only">Search</span>
            {/* <!-- Search icon --> */}
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <div
            onClick={(e) => setProfile((prev) => !prev)}
            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src={user.profilePic}
              alt="user"
            />
          </div>
          {/* <!-- Dropdown menu --> */}
          {profile && (
            <div class="z-50 my-4 w-56 absolute top-14 right-5 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-900 dark:divide-gray-800">
              <div class="py-3 px-4">
                <span class="block text-sm font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </span>
                <span class="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user.email}
                </span>
              </div>
              <ul class="py-1 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
                  >
                    Account settings
                  </a>
                </li>
              </ul>
              <ul class="py-1 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      class="mr-2 w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                    </svg>
                    My likes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      class="mr-2 w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {" "}
                      <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                      <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                      <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                    </svg>
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <span class="flex items-center">
                      <svg
                        class="mr-2 w-4 h-4 text-primary-800 dark:text-primary-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                      </svg>
                      Pro version
                    </span>
                    <svg
                      class="w-2.5 h-2.5 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <ul class="py-1 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Wrapper>
        <div className="max-w-lg">
          <ProfileHeader
            accountId={user.id}
            authUserId={user.id}
            name={user.name}
            username="auwal"
            imgUrl={user.profilePic}
            cover={"/postt.jpg"}
            bio={user.bio}
            item1="My Profile"
            item2="About"
            item3="Reports"
          />

          <div className="mt-3">
            <div className="w-full">
              <div className="tab">
                {profileTabs.map((tab, index) => (
                  <>
                    <div
                      key={index}
                      onClick={() => setItem(tab)}
                      className={`${
                        item === tab ? "bg-[#0e0e12] text-light-2" : ""
                      } flex min-h-[50px] flex-1 items-center gap-3 bg-dark-2 text-light-2 cursor-pointer p-5`}
                    >
                      <img
                        src={tab.icon}
                        alt={tab.label}
                        className="w-[23px] h-[23px] object-contain"
                      />
                      <p className="text-small-medium">{tab.label}</p>
                      {tab.label === "posts" && (
                        <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                          {user?.posts?.length}
                        </p>
                      )}
                    </div>
                  </>
                ))}
              </div>
              {item === "" && (
                <div className="w-full text-light-1">
                  <ThreadsTab userProfileData={user} accountType="User" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
