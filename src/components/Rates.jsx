import "../styles/Rates.sass";

const rates = [1, 2, 3, 4, 5];

export default function Rate({ setRate, rate }) {
  return (
    <div className="rates">
      {rates.map((r) => (
        <button
          disabled={r == rate}
          className={r == rate ? "disabled" : ""}
          key={r}
          onClick={({ target }) => setRate(target.value)}
          type="button"
          value={r}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
