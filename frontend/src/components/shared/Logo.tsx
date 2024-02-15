import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center gap-8">
      <Link to={"/"}>
        <img
          src="Logo.png"
          alt="chatbot"
          width='20%'
          height={"auto"}
          className="logo"
        />
        {/* <div className="hidden md:block sm:hidden xs:hidden">
          <span
            className="text-white mr-auto font-bold"
            style={{ textShadow: "2px 2px 20px #000" }}
          >
          </span>
        </div> */}
      </Link>
    </div>
  );
}

export default Logo;
