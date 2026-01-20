"use client";
import React from "react";
import GalleryTabs from "../../../components/gallery/GalleryTabs";
import Heading_desc from "../../../components/Heading_desc";

const Gallery = () => {
  return (
    <div>
      <Heading_desc
        title={`Partiers gallery`}
        description={`A snapshot of the energy, the crowd, and the moments that define our nights. Every frame captures the vibe, the movement, and the people who made it unforgettable.`}
      />
      <GalleryTabs />
    </div>
  );
};

export default Gallery;
