import React, { useState } from "react";
import ModalImage from "react-modal-image";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        {/* <div className="hover-text">
          <h4>{title}</h4>
        </div> */}
        {/* <ModalImage
          small={smallImage}
          large={largeImage}
          alt={title}
          className="img-responsive"
          hideDownload={true}
        />{" "}
    */}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>

    </div>
  );
};
