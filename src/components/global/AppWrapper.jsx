import React from "react";

const AppWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
