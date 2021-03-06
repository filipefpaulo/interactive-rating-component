import Star from "../../images/icon-star.svg";
import Rates from "../Rates";

export default function FormWidget({ setRate, rate, setFormControl }) {
  return (
    <div className="content rating">
      <img src={Star} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rates setRate={setRate} rate={rate} />
      <button type="button" onClick={() => setFormControl(1)}>
        SUBMIT
      </button>
    </div>
  );
}
