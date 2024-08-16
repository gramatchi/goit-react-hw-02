import s from "./Options.module.css";

const Options = ({ options, handleClick, totalFeedback, resetFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        {Object.keys(options).map((item) => (
          <li key={item}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </li>
        ))}
      </ul>
      {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : null}
    </>
  );
};

export default Options;
