import s from "./Options.module.css"

const Options = ({ options, handleClick }) => {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}> 
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Options;
