const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ poster_path }) {
  const movieStyle = {
    width: 180,
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
  };

  return (
    <div style={movieStyle}>
      <img
        src={IMG_BASE_URL + poster_path}
        alt="포스터 사진"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
