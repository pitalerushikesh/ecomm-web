import React from "react";

const SimpleWave = () => {
  return (
    <div class="header">
      <div
        style={{
          height: "50vh",
          zIndex: "1",
        }}
        class="inner-header flex"
      ></div>

      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#fe931d" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#feb91d" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#fee61d" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FFEBC2" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SimpleWave;
