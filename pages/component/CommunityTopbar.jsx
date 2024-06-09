import React from "react";

export default function CommunityTopbar({ id, img, title }) {
  const containerStyle = {
    width: "115px",
    height: "115px",
  };

  const divStyle = {
    height: "100%",
    position: "relative",
  };

  const style = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={divStyle}>
        <div style={style} className="flex items-end rounded-xl">
          <div className="text-light-1 bg-gray-900/70 w-full p-2">
            <h1 className=" text-small-medium truncate">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
