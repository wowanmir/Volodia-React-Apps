
function Reset(setCount) {
  return (
    <div>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
