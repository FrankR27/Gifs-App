import Gif from "../../compotents/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

function Detail({ params }) {
  const gifs = useGlobalGifs();
  const gif = gifs.find((gif) => gif.id === params.id);

  return (
    <div>
      <h1>Detail</h1>
      <Gif {...gif} />
    </div>
  );
}

export default Detail;
