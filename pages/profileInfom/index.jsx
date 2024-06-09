import React, { useState } from "react";
import Wrapper from "../component/Wrapper";
import ProfileHeader from "../component/shared/ProfileHeader";
import ThreadsTab from "../component/shared/ThreadsTab";
import { user, profileTabs } from "@/constants";

export default function index() {
  const [item, setItem] = useState("");

  return (
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
          item1="profile"
          item2="Report"
          item3="About"
        />

        <div className="mt-2 max-w-lg">
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
  );
}
