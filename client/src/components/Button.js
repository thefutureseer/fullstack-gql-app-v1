import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  buttonText,
  onClick,
  loading,
  className = '',
}) => {


  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className={classnames(
          [className],
          "delete-btn text-sm font-medium leading-5 text-black transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none",
          {
            "bg-bb-purple": !loading,
            "bg-bb-gray-700": loading,
            "cursor-wait": loading,
          }
        )}
      >
        {loading ? "Loading..." : buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;