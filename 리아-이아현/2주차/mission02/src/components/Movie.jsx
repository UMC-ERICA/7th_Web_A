import { useState } from "react";
import IMG_BASE_URL from "../constants/path";

export default function Movie({ poster_path }) {
  const [hovered, setHovered] = useState(false);

  const movieStyle = {
    width: 180,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    filter: hovered ? "brightness(50%)" : "brightness(100%)",
  };

  return (
    <div
      style={movieStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`${IMG_BASE_URL}${poster_path}`}
        alt="포스터 사진"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
