import style from "./Button.module.css";
export default function SButton() {
  return (
    <div className={style.orderBoxButtons}>
      <div className={style.orderButtons}>
        <button className={style.center}>Shop Now</button>
      </div>
    </div>
  );
}
