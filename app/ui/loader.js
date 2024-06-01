import CircleAnime from "./global/circle-anime";

export default function Loader({ flag }) {
  return (
    <div style={{ opacity: flag ? "0" : "1" }} className="loader">
      <CircleAnime />
      {/* <div>Loading...</div> */}
    </div>
  );
}
