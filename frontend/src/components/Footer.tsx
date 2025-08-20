import React from "react";
import { FaGithub } from 'react-icons/fa';

const Footer:React.FC  = () => {
  return (
    <React.Fragment>
      <footer className="mb-0 text-center">
        <p>Follow me on GitHub:</p>
        <a href="https://github.com/gcyogesh" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
