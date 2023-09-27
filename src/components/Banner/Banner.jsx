import PropTypes from "prop-types";
import { useState } from "react";

const Banner = ({ handleInputValue }) => {
  const [inputValue, setInputValue] = useState("");

  const imgUrl = "url(/rectangle-4281.png)";
  return (
    <div
      style={{ backgroundImage: imgUrl }}
      className="h-[65vh] lg:h-[80vh] bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-white bg-opacity-90 h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-6xl font-bold mb-10">
          I Grow By Helping People In Need
        </h1>
        <div>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 rounded w-80 lg:w-[500px]"
            type="text"
            placeholder="Search here...."
          />
          <button
            onClick={() => handleInputValue(inputValue)}
            className="absolute -ml-[88px] p-2 lg:mt-[1px]
          px-5 bg-[#FF444A] rounded-r text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  handleInputValue: PropTypes.func.isRequired,
};
