function Square({ value, onSquareClick }) {
  return (
    <div className="square-container">
      <button onClick={onSquareClick} className="square">
        <span className="font">{value}</span>
      </button>
    </div>
  );
}
export default Square;
