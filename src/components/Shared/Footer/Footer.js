import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "#fbd062", padding: "30px 0" }}>
      <div className="copyright">
        <p className="text-center">
          Copyright by{" "}
          <a
            className="text-decoration-none"
            href="https://github.com/motiurdev"
            target="_blank"
            rel="noreferrer"
          >
            Motiur Rahman{" "}
          </a>
          in 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
