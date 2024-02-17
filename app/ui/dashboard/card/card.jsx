import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>Tareas Activas</span>
        <span className={styles.subtitle}>24</span>
        <span>
          <span className={styles.positive}>12% </span>
          <span className={styles.detail}>En referencia al mes pasado.</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
