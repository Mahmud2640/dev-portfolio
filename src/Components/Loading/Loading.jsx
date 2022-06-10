import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="container-loader">
      <div class="loader-spinner">
        <svg
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="load one" cx="60" cy="60" r="20" pathLength="1" />
          <circle class="load two" cx="60" cy="60" r="10" />
          <circle class="load three" cx="60" cy="60" r="30" pathLength="1" />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
