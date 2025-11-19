import styles from './Card.module.css';

function Card({ id, title, thumbnail }) {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
    return (
        <div className={styles.card}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={title} />
            </a>
        </div>
    );
}

export default Card;