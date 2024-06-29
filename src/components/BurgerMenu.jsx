export default function BurgerMenu({ onShowMenu, isShown, ...props }) {
  const styles =
    "w-[20px] h-[2px] bg-white rounded mb-2 transition ease transform duration-[500ms]";
  console.log(isShown);
  return (
    <button onClick={onShowMenu} {...props}>
      <div className={`${styles} ${isShown ? "invisible" : ""}`}></div>
      <div className={`${styles} ${isShown ? "rotate-45" : ""}`}></div>
      <div
        className={`${styles} mb-0 ${
          isShown ? "rotate-[135deg] translate-y-[-470%]" : ""
        }`}
      ></div>
    </button>
  );
}
