import React, { useEffect } from "react";
import "./Loading.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="loader">
      <PacmanLoader
        color="#f2e03d"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={4}
      />
    </div>
  );
};

export default Loading;
