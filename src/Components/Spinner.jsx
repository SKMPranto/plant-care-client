import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-10px)] flex justify-center items-center">
        <BeatLoader color="green" size="30px" />
      </div>
    </div>
  );
};

export default Spinner;