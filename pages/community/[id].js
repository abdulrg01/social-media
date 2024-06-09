import React from "react";
import Wrapper from "../component/Wrapper";

export default function index() {

  const containerStyle = {
    width: "500px",
    height: "400px",
  };

  return (
    <Wrapper>
      <div style={containerStyle}></div>
    </Wrapper>
  );
}
