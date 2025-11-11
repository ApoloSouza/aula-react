import styles from "./Card.module.css";

function Card({ id, title }) {
  const thumbnail = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

  return (
    <div className={styles.card}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={thumbnail} alt={title || "Vídeo"} />
        {title && <p className={styles.title}>{title}</p>}
      </a>
    </div>
  );
}

export default Card;
