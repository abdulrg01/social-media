import React, { useState } from "react";

export default function AccountProfile({
  name,
  setName,
  username,
  setUsername,
  bio,
  setBio,
  img,
  handleImage,
  handleSummit,
  btnTitle,
}) {

  return (
    <form className="flex flex-col justify-start gap-7" onSubmit={handleSummit}>
      <div className="flex items-center gap-4">
        <label htmlFor="" className="account-form_image-label">
          {img ? (
            <img
              src={img}
              alt="profile photo"
              className="w-[96px] h-[96px] rounded-full object-contain"
            />
          ) : (
            <img
              src="/profile.svg"
              alt="profile photo"
              className="w-[24px] h-[24px] object-contain"
            />
          )}
        </label>
        <div className="flex-1 text-base-semibold text-gray-200">
          <input
            type="file"
            accept="image/*"
            placeholder="Upload a photo"
            className="account-form_image-input"
            onChange={handleImage}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <label htmlFor="name" className="text-base-semibold text-light-2">
          Name
        </label>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="account-form_input no-focus"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <label htmlFor="username" className="text-base-semibold text-light-2">
          Username
        </label>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            className="account-form_input no-focus"
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <label htmlFor="bio" className="text-base-semibold text-light-2">
          Bio
        </label>
        <div>
          <textarea
            rows={10}
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            id="bio"
            className="account-form_input no-focus"
          />
        </div>
      </div>
      <button type="submit" className="bg-primary-500 p-2.5">
        Submit
      </button>
    </form>
  );
}
