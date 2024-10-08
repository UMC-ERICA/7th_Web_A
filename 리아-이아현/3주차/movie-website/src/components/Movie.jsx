import { useState } from "react";
import styled from "styled-components";
import IMG_BASE_URL from "../constants/path";

const MovieContainer = styled.div`
    width: 180px;
    border-radius: 10px;
    overflow: hidden
    text-align: center;
    filter: ${({ hovered }) => (hovered ? "brightness(50%)" : "brightness(100%)")};
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function Movie({ poster_path }) {
  const [hovered, setHovered] = useState(false);

  return (
    <MovieContainer
      hovered={hovered ? 1 : 0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PosterImage src={`${IMG_BASE_URL}${poster_path}`} alt="포스터 사진" />
    </MovieContainer>
  );
}
