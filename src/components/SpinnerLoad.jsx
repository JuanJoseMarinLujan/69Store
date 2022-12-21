import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const SpinnerLoad = ( { loading }) => {
  return (
    <div className="mt-80">
      <SyncLoader
        color={"black"}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default SpinnerLoad;
