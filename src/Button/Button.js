import style from "./Button.module.css";
import { useHistory } from "react-router-dom";


export default function Button(props) {
  let history = useHistory();
  return (
    <div className={style.orderBoxButtons}>
      <div className={style.orderButtons}>
        <button
          onClick={() => history.push(props.Name)}
          className={style.leftButton}
        >
          Custom Order
        </button>
        <button className={style.rightButton}>Existing Inventory</button>
      </div>
    </div>
  );
}
