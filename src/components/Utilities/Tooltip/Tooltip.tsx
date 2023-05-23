import styles from "./tooltip.module.css";

interface Props {
  text: string;
}

const Tooltip = ({ text }: Props) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.icon}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#8b8585"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12.5 2.2a10.3 10.3 0 1 0 10.3 10.3A10.299 10.299 0 0 0 12.5 2.2zm0 3.3a1 1 0 1 1-1 1 1.002 1.002 0 0 1 1-1zM14 19h-3v-1h1v-8h-1V9h2v9h1z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </g>
        </svg>
      </div>
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  );
};

export default Tooltip;
