import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className='card-header'>
      <div>
        <img
          className='imgLogo'
          src='https://static.vecteezy.com/system/resources/thumbnails/003/064/633/small/tuxedo-man-logo-and-symbols-template-free-vector.jpg'
        />
      </div>
      <div className='menu'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
