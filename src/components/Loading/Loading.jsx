import React, { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="loader bg-[#1b262c] flex justify-center items-center h-[100vh]">
      <PacmanLoader
        color="#f2e03d"
        loading={true}
        size={document.documentElement.clientWidth <= 768 ? 100 : 150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={4}
      />
    </div>
  );
};

export default Loading;
