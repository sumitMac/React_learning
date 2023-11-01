import { useEffect } from "react";
import Square from "./Square";
import { useBoard } from "./useBoard";
import { source } from "../../utils/source";

export default function Board() {
  const [sq, handleClick, status, winner, setSq] = useBoard();

  useEffect(() => {
    if (status && winner) {
      alert(`${status}`);
    }
  }, [winner, status]);

  return (
    <>
      {winner ? (
        <img
          style={{ zIndex: "2", width: "300px", height: "200px" }}
          src="https://media0.giphy.com/media/XzYSFVDOmGTJFs3bLv/giphy.gif?cid=ecf05e47hvj28nx7o68y2313u6duq06t7bgl8b0qtmuiw7vu&ep=v1_stickers_search&rid=giphy.gif&ct=ts"
        />
      ) : (
        <div className="status">{status}</div>
      )}

      <div className="container">
        {source(0, 8).map((i) => (
          <Square key={i} onSquareClick={() => handleClick(i)} value={sq[i]} />
        ))}
      </div>
      <button onClick={() => setSq("")} className="btn-reset">
        RESET
      </button>
    </>
  );
}
