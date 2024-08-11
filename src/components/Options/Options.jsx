import s from "./Options.module.css"
const Options = ({options}) => {
    return (
        <ul className={s.list}>
          {Object.keys(options).map(item => (
            <li key={item}>
              <button>
                {item}
              </button>
            </li>
          ))}
        </ul>
      );
}

export default Options